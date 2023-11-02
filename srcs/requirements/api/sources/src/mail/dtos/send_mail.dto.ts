import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Address } from "nodemailer/lib/mailer";

export class SendMailDto {
	@IsEmail()
	@IsOptional()
	from?: string | Address;

	@IsEmail()
	@IsNotEmpty()
	to: string | Address;

	@IsEmail()
	@IsArray({
		each: true
	})
	@IsOptional()
	cc?: string | Address | Array<string | Address>;

	@IsEmail()
	@IsArray({
		each: true
	})
	@IsOptional()
	co?: string;

	@IsString()
	@IsNotEmpty()
	subject: string;

	@IsString()
	@IsNotEmpty()
	text: string;
}
