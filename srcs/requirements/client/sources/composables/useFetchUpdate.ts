export type FetchResponse<T> = {
	datas: T,
	access_token: string,
};

export async function authorizedFetch<T>(url: string, opts: any = {})
{
	const runtimeConfig = useRuntimeConfig();

	return await $fetch<FetchResponse<T>>(url, {
		...opts,
		credentials: 'same-origin',
		onRequest({ options })
		{
			options.baseURL = runtimeConfig.public.API_URL;
			options.headers = {
				...options.headers,
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${getAuthorization()}`,
			};
		},
		onResponseError({ request, response, options }) {
			if (response.status >= 500 && response.status < 600)
			{
				addAlert({
					type: 'error',
					message: 'Erreur serveur, veuillez réessayer ou contacter le service informatique'
				});
			}
			else
			{
				addAlert({
					type: 'error',
					message: response._data.message
				});
			}
		},
	}).then(response => {
		if (response.access_token)
			setAuthorization(response.access_token);
		return response.datas;
	});
}
