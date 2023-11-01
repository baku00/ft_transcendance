import { DefaultValueObject } from "../ValueObject.type";
import { IEmail } from "./Email.interface";

export type TEmail = IEmail;

export const DefaultEmail: TEmail = {
	...copy(DefaultValueObject),
};