/** @format */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity()
export default class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'text' })
  @IsEmail()
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'text' })
  access_token: string;

  @Column({ type: 'text' })
  profile_picture: string;

  @Column({ type: 'varchar' })
  display_name: string;

  @Column({ type: 'varchar' })
  phone_number: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
