export function setSessionId(session_id: string)
{
	useCookie('session_id', {
		default: () => session_id,
		watch: false,
		maxAge: 60 * 60 * 24 * 7
	});
}
