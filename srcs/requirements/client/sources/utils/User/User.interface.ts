import { IGeneric } from '../Generics/Interface';
import { Email } from '../ValueObjects/Email/Email.class';

export interface IUser extends IGeneric {
	email: Email;
}
