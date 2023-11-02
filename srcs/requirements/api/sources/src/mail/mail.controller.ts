import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { SendMailDto } from './dtos/send_mail.dto';
import { MailService } from './mail.service';
import { IdPipe } from 'src/generics/pipes/id.pipe';

@Controller('mail')
export class MailController {
	constructor(
		@Inject(MailService)
		private readonly mailService: MailService,
	) {}

	@Get()
	findAll() {
		return this.mailService.findAll();
	}

	@Post('send')
	send(
		@Body() datas: SendMailDto
	) {
		return this.mailService.sendMail(datas);
	}
}
