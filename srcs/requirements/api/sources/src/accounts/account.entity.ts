import { type } from 'os';
import { BaseEntity } from 'src/generics/entities/base.entity';
import { UserEntity } from 'src/users/user.entity';
import { Entity, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class AccountEntity extends BaseEntity {
	@OneToOne(
		type => UserEntity,
		{
			cascade: true,
			eager: true,
		},
	)
	@JoinColumn({ name: 'userId' })
	user: UserEntity;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	password: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	token: string;
}
