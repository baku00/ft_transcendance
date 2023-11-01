import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthController } from '../auth.controller';
import { canByPass } from '../constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
	canActivate(context: ExecutionContext) {
		const path = context.switchToHttp().getRequest().route.path;

		if (canByPass(path))
			return true;
		return super.canActivate(context);
	}

	handleRequest(err, user, info, context) {
		if (err || !user) {
			throw err || new UnauthorizedException();
		}
		return user;
	}
}
