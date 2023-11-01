import { EMAIL_VALIDATION_ERROR } from "./email.config";

export class EmailBadFormatException extends Error {
	constructor(message: string = EMAIL_VALIDATION_ERROR) {
		super(message);
		this.name = "EmailBadFormatException";
	}
}
