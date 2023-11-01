import { DefaultValueObject } from "../ValueObject.type";
import { IPassword } from "./Password.interface";

export type TPassword = IPassword;

export const DefaultPassword: TPassword = {
	...copy(DefaultValueObject),
};
