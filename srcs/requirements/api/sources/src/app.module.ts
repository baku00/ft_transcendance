import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PermissionGuard } from './auth/guards/permission.guard';
import { JwtInterceptor } from './auth/jwt/jwt.interceptor';
import { AuthModule } from './auth/auth.module';
import { SetCookieMiddleware } from './auth/middleware/set-cookie.middleware';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { GatewayModule } from './gateway/gateway.module';
import { ProfilesModule } from './profile/profile.module';
import { MailModule } from './mail/mail.module';

dotenv.config();

@Module({
	imports: [
		GatewayModule,
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: parseInt(process.env.DB_PORT),
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			entities: ['dist/**/*.entity{.ts,.js}'],
			autoLoadEntities: true,
			synchronize: process.env.ENV === 'dev',
		}),
		MulterModule.register({dest: '/storage'}),
		UsersModule,
		AuthModule,
		ProfilesModule,
		MailModule,
		ThrottlerModule.forRoot({
			ttl: 60,
			limit: 10,
		}),
	],
	controllers: [AppController],
	providers: [
		AppService,
		// {
		// 	provide: APP_GUARD,
		// 	useClass: JwtAuthGuard
		// },
		// {
		// 	provide: APP_GUARD,
		// 	useClass: PermissionGuard
		// },
		{
			provide: APP_INTERCEPTOR,
			useClass: JwtInterceptor
		},
		// {
		// 	provide: APP_GUARD,
		// 	useClass: ThrottlerGuard
		// }
	],
})
export class AppModule {
	configure(consumer) {
		consumer.apply(SetCookieMiddleware).forRoutes('*');
	}
}