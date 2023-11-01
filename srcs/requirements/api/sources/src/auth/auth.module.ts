import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/user.entity';
import { AccountEntity } from 'src/accounts/account.entity';

dotenv.config();

@Module({
	imports: [
		PassportModule,
		HttpModule,
		ConfigModule,
		PassportModule.register({
			defaultStrategy: 'jwt',
		}),
		JwtModule.register({
			secret: process.env.JWT_PRIVATE_KEY,
			signOptions: {
				expiresIn: '10min',
				algorithm: 'ES512',
			}
		}),
		TypeOrmModule.forFeature([UserEntity, AccountEntity])
	],
	controllers: [AuthController],
	providers: [
		AuthService,
		JwtStrategy,
	],
	exports: [AuthService]
})
export class AuthModule {}
