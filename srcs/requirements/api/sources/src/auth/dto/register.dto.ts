import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class RegisterDto {
	@IsEmail({}, { message: 'Email invalid' })
	@IsNotEmpty({ message: 'Un email est nécessaire' })
	email: string;

	@IsString()
	@Length(128, 128, { message: 'Le mot de passe doit être de 128 caractères' })
	@IsNotEmpty({ message: 'Un mot de passe est nécessaire' })
	password: string;

	@IsString()
	@Length(128, 128, { message: 'Le mot de passe doit être de 128 caractères' })
	@IsNotEmpty({ message: 'Un mot de passe est nécessaire' })
	confirm_password: string;
}
