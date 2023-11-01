import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable, map } from 'rxjs';
import { PayloadDatas } from '../interfaces/payload.interface';
import { AppController } from 'src/app.controller';
import { AuthController } from '../auth.controller';

interface RequestDatas extends Request {
	user: {
		datas: PayloadDatas;
		access_token?: string;
	}
}

@Injectable()
export class JwtInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		if (context.getClass().name == AuthController.name && context.getHandler().name == 'login')
			return next.handle();
		const user = context.switchToHttp().getRequest<RequestDatas>();
		// const access_token = user?.access_token;
		return next.handle().pipe(map(
			datas => {
				return {datas};
			}
		));
	}
}
