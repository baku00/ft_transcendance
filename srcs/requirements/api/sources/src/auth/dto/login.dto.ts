import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
	@IsEmail({}, { message: 'Email invalid' })
	@IsNotEmpty({ message: 'Un email est nécessaire' })
	email: string;

	@IsString()
	@IsNotEmpty({ message: 'Un mot de passe est nécessaire' })
	password: string;
}
