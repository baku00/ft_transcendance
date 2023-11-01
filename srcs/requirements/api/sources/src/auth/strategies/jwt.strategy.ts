import { ExtractJwt, JwtFromRequestFunction, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';
import { Payload, PayloadDatas } from '../interfaces/payload.interface';
import { Request, Response } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private authService: AuthService,
		private configService: ConfigService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: process.env.JWT_PUBLIC_KEY,
			passReqToCallback: true,
		});
	}

	async validate(req: Request, payload: Payload, done: Function): Promise<any> {
		if (payload.exp < Date.now() / 1000)
		{
			// const validateAccountFinger = await this.authService.validateAccountFinger(payload.datas);
			// // const newToken = await this.authService.generateJwt(validateAccountFinger);
			// // return {datas: payload.datas, ...newToken};
			// return true;
			return {datas: payload.datas};
		}
		return {datas: payload.datas};
	}
}
