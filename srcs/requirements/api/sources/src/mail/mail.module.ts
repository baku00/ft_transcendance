import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from './mail.config';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { MailController } from './mail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailEntity } from './mail.entity';

dotenv.config();
@Module({
	imports: [
		MailModule,
		ConfigModule,
		MailerModule.forRoot(mailerConfig),
		TypeOrmModule.forFeature([MailEntity])
	],
	controllers: [MailController],
	providers: [MailService],
	exports: [
		MailService,
	]
})
export class MailModule {
	constructor(
	) {
		console.log('MailModule constructor');
		console.log(mailerConfig);
		
		
	}
}
