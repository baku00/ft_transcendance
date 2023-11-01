import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountEntity } from './account.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
	imports: [
		UsersModule,
		TypeOrmModule.forFeature([AccountEntity])
	],
	providers: [AccountsService],
	controllers: [AccountsController],
})
export class AccountsModule {}
