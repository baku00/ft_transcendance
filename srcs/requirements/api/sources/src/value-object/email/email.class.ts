import { ValueObject } from "../value-object.class";
import { IEmail } from "./email.interface";
import { EMAIL_REGEX, EMAIL_VALIDATION_ERROR } from "./email.config";
import { EmailBadFormatException } from "./email.exception";

export class Email extends ValueObject<IEmail> {
	private constructor(value: string) {
		super({ value: value.trim().toLocaleLowerCase() });
	}

	public override validate(): boolean {
		const regex = new RegExp(EMAIL_REGEX);
		return regex.test(this.value);
	}

	public static create(email: string): Email {
		const emailObject = new Email(email);

		if (!emailObject.validate())
			throw new EmailBadFormatException();

		return emailObject;
	}
}
