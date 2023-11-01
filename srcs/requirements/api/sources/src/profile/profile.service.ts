import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/generics/service/base.service';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProfileService {
	constructor(
		@Inject(REQUEST)
		protected request: Request,
		private readonly _userService: UsersService
	) {}

	private getUser()
	{
		return this._userService.getUser();
	}

	async find() {
		const user = this.getUser();
		return this._userService.getRepository().findOneBy({ id: user.id });
	}
}
