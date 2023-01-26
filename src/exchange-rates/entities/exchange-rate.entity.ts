import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'exchange_rates' })
export class ExchangeRateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  symbol: string;

  @Column()
  price: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
