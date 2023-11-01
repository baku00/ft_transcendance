import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class SetCookieMiddleware implements NestMiddleware {
	async use(req: Request, res: Response, next: () => void) {
		next();
	}
}
