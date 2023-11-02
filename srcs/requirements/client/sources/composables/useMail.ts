import { TAlert } from "~/types/alert";
import { tMail } from "~/types/mail";

export async function sendMail(datas: tMail)
{
	await authorizedFetch<tMail>('/mail/send', {
		method: 'POST',
		body: {...datas},
	})
	.then(() => {
		addAlert({
			type: 'success',
			message: 'Mail envoyé',
		});
		return true;
	});
}

export async function getMails()
{
	return await authorizedFetch<tMail[]>('/mail');
}