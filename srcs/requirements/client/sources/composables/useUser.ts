import { Login } from "~/types/auth/login";
import { Register } from "~/types/auth/register";
import { User } from "~/utils/User/User.class";

export function createUser(user: User)
{
	return useState<User>('user', () => user);
}

export function getUser()
{
	return useState<User>('user').value;
}
