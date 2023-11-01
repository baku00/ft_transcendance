import { Login, DefaultLogin } from './login';

export type Register = Login & {
	confirm_password: string;
};

export const DefaultRegister: Register = {
	...copy(DefaultLogin),
	confirm_password: '',
};
