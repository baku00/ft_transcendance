import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserPostDto } from './dtos/user.post.dto';
import { BaseService } from 'src/generics/service/base.service';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class UsersService extends BaseService<UserEntity, UserEntity>{
	constructor(
		@InjectRepository(UserEntity)
		private usersRepository: Repository<UserEntity>,
		@Inject(REQUEST)
		protected request: Request,
	) {
		super(usersRepository);
		this.setRequest(request);
	}

	async create(datas: UserPostDto): Promise<UserEntity> {
		if (await this.getRepository().findOneBy({ email: datas.email }))
			throw new ConflictException(`L'adresse email est déjà utilisée`);
		return await this.getRepository().save(datas);
	}

	async findAll(): Promise<UserEntity[]> {
		return await this.getRepository().find();
	}

	async findOne(id: string): Promise<UserEntity | null> {
		return await this.getRepository().findOneBy({ id });
	}

	async remove(id: string): Promise<Boolean> {
		return !!await this.getRepository().softDelete(id);
	}

	async restore(id: string): Promise<Boolean> {
		return !!await this.getRepository().restore(id);
	}
}
