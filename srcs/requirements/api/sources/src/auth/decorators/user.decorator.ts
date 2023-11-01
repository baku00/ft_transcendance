import { ExecutionContext, UnauthorizedException, createParamDecorator } from "@nestjs/common";
import { PayloadDatas } from "../interfaces/payload.interface";

interface RequestDatas extends Request {
	user: {
		datas: PayloadDatas;
		access_token?: string;
	}
}

export const User = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const user = ctx.switchToHttp().getRequest().user;
		if (!user)
			throw new UnauthorizedException();
		return user.datas;
	}
);
