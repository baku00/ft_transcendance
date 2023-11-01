import { Module } from "@nestjs/common";
import { GatewayGateway } from "./gateway";

@Module({
	providers: [
		GatewayGateway
	]
})
export class GatewayModule {
	constructor() {
		console.log('GatewayModule loaded');
	}
}
