import { ValueObject } from "../ValueObject.class";
import { IPassword } from "./Password.interface";
import { PASSWORD_REGEX, PASSWORD_MIN_LENGTH } from "./Password.config";
import { PasswordMinLengthException, PasswordNullOrEmptyException } from "./Password.exception";
import * as CryptoJS from "crypto-js";

export class Password extends ValueObject<IPassword> {
	private constructor(value: string) {
		super({ value: Password.hash(value) });
	}

	public override validate(): boolean {
		if (this.value === null || this.value === undefined || !this.value.length)
			throw new PasswordNullOrEmptyException();

		if (this.value.length < PASSWORD_MIN_LENGTH)
			throw new PasswordMinLengthException();

		return new RegExp(PASSWORD_REGEX)
				.test(this.value);
	}

	public static create(password: string): Password {
		if (password)
			password = password.trim();

		const passwordObject = new Password(password);

		if (!passwordObject.validate())
			throw new PasswordMinLengthException();

		return passwordObject;
	}

	public static hash(password: string): string {
		const SECRET_KEY_PASSWORD = getRuntimeConfig().public.SECRET_KEY_PASSWORD;
		password = password.split('').map(
			(char: string, index: number) => {
				char = index % 2 === 0 ? char : char.toUpperCase();
				char = String.fromCharCode((char.charCodeAt(0) * index + 1) + (SECRET_KEY_PASSWORD.charCodeAt(index) * index + 1));
				return char;
			}
		).join('');
		return CryptoJS.HmacSHA512(password, SECRET_KEY_PASSWORD).toString();
	}
}
