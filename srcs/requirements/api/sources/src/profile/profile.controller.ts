import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { IdPipe } from 'src/generics/pipes/id.pipe';

@Controller('profile')
export class ProfileController {
	constructor(
		@Inject(ProfileService)
		private readonly profileService: ProfileService,
	) {}

	@Get()
	find() {
		return this.profileService.find();
	}
}
