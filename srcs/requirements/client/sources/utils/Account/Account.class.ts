import { User } from "../User/User.class";
import { Password } from "../ValueObjects/Password/Password.class";
import { PasswordNotMatchException } from "../ValueObjects/Password/Password.exception";
import { IAccount } from "./Account.interface";
import { TAccount } from "./Account.type";

export class Account {
	private readonly _user: User;
	private _password: Password;
	private _confirm_password: Password;

	constructor(
		user: User,
		password: string,
		confirm_password: string,
	) {
		this._user = user;
		this._password = Password.create(password);
		this._confirm_password = Password.create(confirm_password);

		if (!this._password.equals(this._confirm_password))
			throw new PasswordNotMatchException();
	}

	public get user(): User {
		return this._user;
	}

	public get password(): string {
		return this._password.value;
	}

	public get confirm_password(): string {
		return this._confirm_password.value;
	}

	public toJSON() {
		return {
			user: this.user.toJSON(),
			password: this._password,
			confirm_password: this._confirm_password,
		};
	}
}
