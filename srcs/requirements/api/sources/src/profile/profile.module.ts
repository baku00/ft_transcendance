import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
	imports: [
		UsersModule
	],
	providers: [ProfileService],
	controllers: [ProfileController],
})
export class ProfilesModule {}
