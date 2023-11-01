import { Account } from "~/utils/Account/Account.class";

type TAccountDto = {
	user: {
		email: string;
	};
	password: string;
	confirm_password: string;
};

export async function createAccount(account: Account)
{
	const data: TAccountDto = {
		user: {
			email: account.user.email,
		},
		password: account.password,
		confirm_password: account.confirm_password,
	};

	return useState<TAccountDto>('account', () => data);
}
