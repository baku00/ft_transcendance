import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from './account.entity';
import { AccountPostDto } from './dtos/account.post.dto';
import { BaseService } from 'src/generics/service/base.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AccountsService extends BaseService<AccountEntity, AccountEntity>{
	constructor(
		@InjectRepository(AccountEntity)
		private accountsRepository: Repository<AccountEntity>,
		private userService: UsersService,
	) {
		super(accountsRepository);
	}

	async findAll(): Promise<AccountEntity[]> {
		return await this.getRepository().find();
	}

	async findOne(id: string): Promise<AccountEntity | null> {
		return await this.getRepository().findOneBy({ id });
	}

	async remove(id: string): Promise<Boolean> {
		return !!await this.getRepository().delete(id);
	}
}
