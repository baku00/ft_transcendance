import { type } from 'os';
import { BaseEntity } from 'src/generics/entities/base.entity';
import { Entity, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class MailEntity extends BaseEntity {
	@Column({
		type: 'varchar',
		nullable: false,
	})
	to: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	subject: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	text: string;
}
