import { PrimaryGeneratedColumn, Entity, ManyToOne, Column, OneToOne, Index } from 'typeorm'
import { Giveaway } from '.'
import { IsFQDN } from 'class-validator'
import { GiveawayItemKey } from './GiveawayItemKey'

@Entity()
export class GiveawayItem {

  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  name: string

  @Column('varchar')
  @IsFQDN()
  url: string

  @OneToOne(type => GiveawayItemKey, key => key.giveawayItem, {
    cascade: true
  })
  key: GiveawayItemKey

  @ManyToOne(type => Giveaway)
  giveaway: Giveaway
}