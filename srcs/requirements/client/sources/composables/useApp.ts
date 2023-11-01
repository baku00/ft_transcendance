export function getRuntimeConfig()
{
	return useRuntimeConfig();
}

export function getAppConfig()
{
	return useAppConfig();
}

export async function loadApp()
{
	const runtimeConfig = getRuntimeConfig();
}

export function setLoaded(loaded: boolean)
{
	useState('loaded').value = loaded;
}

export function isLoaded()
{
	return useState('loaded').value;
}

export function getTitle()
{
	return getAppConfig().title;
}
