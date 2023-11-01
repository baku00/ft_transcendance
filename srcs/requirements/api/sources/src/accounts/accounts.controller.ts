import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { AccountPostDto } from './dtos/account.post.dto';
import { AccountsService } from './accounts.service';
import { IdPipe } from 'src/generics/pipes/id.pipe';

@Controller('accounts')
export class AccountsController {
	constructor(
		@Inject(AccountsService)
		private readonly accountsService: AccountsService,
	) {}

	@Get()
	findAll() {
		return this.accountsService.findAll();
	}

	@Get(':id')
	findById(
		@Param('id', IdPipe) id: string
	) {
		return this.accountsService.findOne(id);
	}

	@Delete(':id')
	remove(
		@Param('id', IdPipe) id: string
	) {
		return this.accountsService.remove(id);
	}
}
