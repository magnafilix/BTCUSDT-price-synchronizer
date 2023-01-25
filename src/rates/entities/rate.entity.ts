import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class RateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
