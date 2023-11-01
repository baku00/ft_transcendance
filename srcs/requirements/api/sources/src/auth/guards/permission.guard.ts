import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { canByPass } from '../constants';

@Injectable()
export class PermissionGuard implements CanActivate {
	constructor(
		private authService: AuthService,
	)
	{}

	async canActivate(
		context: ExecutionContext,
	): Promise<boolean> {
		const path = context.switchToHttp().getRequest().route.path;
		const request = context.switchToHttp().getRequest();
		const user = request.user;

		if (canByPass(path))
			return true;
		if (!user)
			throw new UnauthorizedException();

		return true;
		// return await this.authService.isAuthorized(user['datas'], {path: request.route.path, method: request.route.stack[0].method});
	}
}
