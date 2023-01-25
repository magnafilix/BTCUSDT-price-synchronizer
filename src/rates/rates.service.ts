import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RateEntity } from './entities/rate.entity';
import { CreateRateDto } from './dto/create-rate.dto';

@Injectable()
export class RatesService {
  @InjectRepository(RateEntity)
  private readonly repository: Repository<RateEntity>;

  public async getCurrentRate(): Promise<string> {
    /**
     * either:
     * - direct binance api call
     * - most recent record from rate history table
     */

    const mostRecentRate = await this.repository.findOne({
      order: { id: 'DESC' },
    });

    return '20987.34';
  }

  public async getRateHistory(): Promise<RateEntity[]> {
    return this.repository.find();
  }

  public async createRates(rates: CreateRateDto[]): Promise<RateEntity[]> {
    const entities = rates.map(({ price }) => {
      const rate = new RateEntity();

      rate.price = price;

      return rate;
    });

    return this.repository.save(entities);
  }
}
