import { TAlert } from "~/types/alert";

export function getAlertState() {
	return useState<TAlert[]>('alerts', () => []);
}

export function getAlerts() {
	return getAlertState().value;
}

export function addAlert(alert: TAlert) {
	alert._id = Math.random().toString();
	const state = getAlertState();
	state.value.push(alert);
	return alert;
}

export function editAlert(id: string, alert: TAlert) {
	const state = getAlertState();
	const index = state.value.findIndex(alert => alert._id === id);
	if (index !== -1)
		state.value[index] = alert;
	const _alert_document = document.getElementById(id);
	if (_alert_document)
	{
		const alert_item = _alert_document.querySelector('.alert');
		if (alert_item)
		{
			const alert_content = _alert_document.querySelector('.content');
			if (alert_content)
				alert_content.innerHTML = alert.message;
		}
	}

}

export function removeAlert(id: string) {
	const state = getAlertState();
	const index = state.value.findIndex(alert => alert._id === id);
	if (index !== -1)
		state.value.splice(index, 1);
}
