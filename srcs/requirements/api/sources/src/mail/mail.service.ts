import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/generics/service/base.service';
import { SendMailDto } from './dtos/send_mail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { Repository } from 'typeorm';
import { MailEntity } from './mail.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MailService extends BaseService<MailEntity, MailEntity>{
	constructor(
		@InjectRepository(MailEntity)
		private mailRepository: Repository<MailEntity>,
		private mailerService: MailerService,
	) {
		super(mailRepository);
	}

	async findAll(): Promise<MailEntity[]> {
		return await this.getRepository().find();
	}

	async sendMail(datas: SendMailDto)
	{
		const created = await this.getRepository().save(datas);
		// const mail = await this.mailerService.sendMail({
		// 	from: datas.from ?? process.env.MAIL_FROM, //'process.env.MAIL_FROM',
		// 	to: process.env.MAIL_TO ?? datas.to, //'process.env.MAIL_FROM',
		// 	cc: process.env.MAIL_TO ?? datas.cc,
		// 	subject: datas.subject,
		// 	html: `
		// 		${datas.text}
		// 		<br/>
		// 		<p>Ceci est un mail automatique, merci de ne pas y répondre.</p>
		// 	`
		// });
		return created;
	}
}
