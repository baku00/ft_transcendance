import { tGeneric } from "./generic";

export type tMail = tGeneric & {
	to: string;
	subject: string;
	text: string;
};

export const DefaultMail: tMail = {
	to: '',
	subject: '',
	text: '',
};
