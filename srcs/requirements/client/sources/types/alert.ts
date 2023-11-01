export type TAlert = {
	_id?: string;
	type: 'success' | 'error' | 'warning' | 'info' | 'danger';
	message: string;
	time?: number;
}
