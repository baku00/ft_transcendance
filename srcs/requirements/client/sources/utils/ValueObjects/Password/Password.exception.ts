import { ValueNullOrEmptyException } from "../ValueObject.exception";
import {
	PASSWORD_MIN_LENGTH_VALIDATION_ERROR,
	PASSWORD_NOT_MATCH_VALIDATION_ERROR,
	PASSWORD_NULL_OR_EMPTY_ERROR
} from "./Password.config";

export class PasswordMinLengthException extends Error {
	constructor(message: string = PASSWORD_MIN_LENGTH_VALIDATION_ERROR) {
		super(message);
		this.name = "PasswordMinLengthException";
	}
}

export class PasswordNotMatchException extends Error {
	constructor(message: string = PASSWORD_NOT_MATCH_VALIDATION_ERROR) {
		super(message);
		this.name = "PasswordNotMatchException";
	}
}

export class PasswordNullOrEmptyException extends ValueNullOrEmptyException {
	constructor(message: string = PASSWORD_NULL_OR_EMPTY_ERROR) {
		super(message);
		this.name = "PasswordNullOrEmptyException";
	}
}
