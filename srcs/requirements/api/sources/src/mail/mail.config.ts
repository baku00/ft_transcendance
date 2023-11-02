import { MailerOptions } from '@nestjs-modules/mailer';
import * as dotenv from 'dotenv';

dotenv.config();

const devConfig: MailerOptions = {
	transport: {
		host: process.env.MAIL_HOST,
		port: parseInt(process.env.MAIL_PORT),
		secure: true,
		auth: {
			user: process.env.MAIL_FROM,
			pass: process.env.MAIL_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false
		},
	},
	defaults: {
		from: `${process.env.MAIL_DEFAULT_FROM} <${process.env.MAIL_FROM}>`,
	},
}

const prodConfig: MailerOptions = {
	transport: {
		host: process.env.MAIL_HOST,
		port: parseInt(process.env.MAIL_PORT),
		auth: {
			user: process.env.MAIL_FROM,
			pass: process.env.MAIL_PASSWORD,
		},
		secure: true
	},
	defaults: {
		from: `${process.env.MAIL_DISPLAY_FROM} <${process.env.MAIL_FROM}>`,
	},
};

export const mailerConfig = process.env.SERVER_HOST?.length ? devConfig : prodConfig;