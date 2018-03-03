import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { User } from '.'

@Entity()
export class UserLevel extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  xp: number

  @Column()
  level: number

  @OneToOne(type => User, user => user.level)
  @JoinColumn()
  user: User
}