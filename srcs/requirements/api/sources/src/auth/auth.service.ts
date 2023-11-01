import { BadRequestException, ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { BaseService } from 'src/generics/service/base.service';
import * as useragent from 'useragent';
import { UserEntity } from 'src/users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { v4 as uuid } from 'uuid';
import { Response } from 'express';
import { RegisterDto } from './dto/register.dto';
import { AccountEntity } from 'src/accounts/account.entity';
import * as CryptoJS from 'crypto-js'
import { PayloadDatas } from './interfaces/payload.interface';
import { Email } from 'src/value-object/email/email.class';
import { Password } from 'src/value-object/password/password.class';
import { PasswordNotMatchException } from 'src/value-object/password/password.exception';

dotenv.config();

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserEntity)
		private usersRepository: Repository<UserEntity>,
		@InjectRepository(AccountEntity)
		private accountsRepository: Repository<AccountEntity>,
		private jwtService: JwtService,
	) {}

	async login(datas: LoginDto)
	{
		const email = Email.create(datas.email);
		const password = Password.create(datas.password);

		const user = await this.usersRepository.findOneBy({ email: email.value });
		if (!user)
			throw new NotFoundException('Utilisateur introuvable');

		const account = await this.accountsRepository.findOneBy({user: { id: user.id }});
		if (!account)
			throw new NotFoundException('Compte introuvable');

		if (!await password.verify(account.password))
			throw new UnauthorizedException('Mot de passe incorrect');
		
		return {
			user: user,
			token: this.generateJWT(user, account),
		};
	}

	async register(datas: RegisterDto)
	{
		const email = Email.create(datas.email);
		const password = Password.create(datas.password);
		const confirm_password = Password.create(datas.confirm_password);

		if (!password.equals(confirm_password))
			throw new PasswordNotMatchException();

		if (await this.usersRepository.findOneBy({ email: datas.email }))
			throw new ConflictException('Email already used');
		
		const user = await this.usersRepository.save({
			email: datas.email,
		});

		const account = await this.accountsRepository.save({
			user: user,
			password: await password.hash(),
			token: this.generateToken(user),
		});

		return {
			user: user,
			token: this.generateJWT(user, account),
		};
	}

	private generateToken(user: UserEntity)
	{
		return CryptoJS.HmacSHA256(`${user.id}-${user.email}`, `${Math.random()}-${uuid()}`).toString();
	}

	private generateFingerprint(user: UserEntity, account: AccountEntity)
	{
		const payload = {
			account_id: account.id,
			user_id: user.id,
			email: user.email,
			token: account.token,
		};
		return CryptoJS.HmacSHA256(JSON.stringify(payload), process.env.SALT_FINGERPRINT).toString();
	}

	private generateJWT(user: UserEntity, account: AccountEntity)
	{
		const payload: PayloadDatas = {
			user_id: user.id,
			account_id: account.id,
			fingerprint: this.generateFingerprint(user, account),
		}
		return this.jwtService.sign({datas: payload});
	}
}
