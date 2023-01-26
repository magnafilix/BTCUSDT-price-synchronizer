import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeRateEntity } from './entities/exchange-rate.entity';
import { CreateExchangeRateDto } from './dto/create-exchange-rate.dto';

@Injectable()
export class RatesService {
  @InjectRepository(ExchangeRateEntity)
  private readonly repository: Repository<ExchangeRateEntity>;

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

  public async getRateHistory(): Promise<ExchangeRateEntity[]> {
    return this.repository.find();
  }

  public async createRates(
    rates: CreateExchangeRateDto[],
  ): Promise<ExchangeRateEntity[]> {
    const entities = rates.map(({ price }) => {
      const rate = new ExchangeRateEntity();

      rate.price = price;

      return rate;
    });

    return this.repository.save(entities);
  }
}
