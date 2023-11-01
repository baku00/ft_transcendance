export interface PayloadDatas {
	account_id: string,
	user_id: string,
	fingerprint: string,
}

export interface Payload {
	datas: PayloadDatas,
	iat: number,
	exp: number,
}
