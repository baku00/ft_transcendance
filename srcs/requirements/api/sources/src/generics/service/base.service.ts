import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { doc } from 'prettier';
import { FindOptionsWhere, Repository } from 'typeorm';
import { BaseEntity } from '../entities/base.entity';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { UserEntity } from 'src/users/user.entity';

@Injectable()
export class BaseService <T, R> {
	protected	_request: Request;

	constructor(
		private readonly _repository: Repository<R>,
	) {}

	protected setRequest(request: Request)
	{
		this._request = request;
	}

	protected getRequest(): Request
	{
		return this._request;
	}

	getRepository(): Repository<R> {
		return this._repository;
	}

	getUser()
	{
		return this._request['user'].datas.user_id;
	}
}
