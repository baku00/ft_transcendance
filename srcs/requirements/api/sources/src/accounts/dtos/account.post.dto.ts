import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class AccountPostDto {
	@IsUUID('4', { message: 'uuid invalide' })
	@IsNotEmpty({ message: 'Un identifiant est nécessaire' })
	user: string;

	@IsString()
	@IsNotEmpty({ message: 'Un mot de passe est nécessaire' })
	password: string;
}
