import { Login } from "~/types/auth/login";
import { Register } from "~/types/auth/register";
import { Account } from "~/utils/Account/Account.class";
import { User } from "~/utils/User/User.class";


export async function register(datas: Register)
{
	let user: User;
	let account: Account;
	try {
		user = new User(datas.email);
		account = new Account(user, datas.password, datas.confirm_password);
	} catch (error: any) {
		return addAlert({
			type: 'error',
			message: error.message,
		});
	}
	return createUser(user) && createAccount(account);
}

export async function login(datas: Login)
{
	if (datas.email && datas.password)
	{
		addAlert({
			type: 'success',
			message: 'Vous êtes connecté'
		})
		return getUser();
	}
	return false;
}