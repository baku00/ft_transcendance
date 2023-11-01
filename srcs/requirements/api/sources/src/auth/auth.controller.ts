import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
@UseGuards(JwtAuthGuard)
export class AuthController {
	constructor(
		private readonly authService: AuthService,
	)
	{}

	@Post('login')
	async login(@Body() datas: LoginDto)
	{
		return this.authService.login(datas);
	}

	@Post('register')
	async register(@Body() datas: RegisterDto)
	{
		return this.authService.register(datas);
	}
}
