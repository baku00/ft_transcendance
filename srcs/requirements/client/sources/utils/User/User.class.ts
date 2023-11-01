import { Email } from "../ValueObjects/Email/Email.class";
import { IUser } from "./User.interface";
import { TUser } from "./User.type";

export class User {
	private _email: Email;

	constructor(email: string) {
		this._email = Email.create(email);
	}

	public get email(): string {
		return this._email.value;
	}

	public toJSON(): TUser {
		return {
			email: this._email,
		};
	}
}
