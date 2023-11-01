import { IGeneric } from '../Generics/Interface';
import { User } from '../User/User.class';
import { Password } from '../ValueObjects/Password/Password.class';

export interface IAccount extends IGeneric {
	user: User;
	password: Password;
	confirm_password: Password;
}
