import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeRateEntity } from './entities/exchange-rate.entity';
import { CreateExchangeRateDto } from './dto/create-exchange-rate.dto';

@Injectable()
export class RatesService {
  @InjectRepository(ExchangeRateEntity)
  private readonly repository: Repository<ExchangeRateEntity>;
  private readonly DEFAULT_EXCHANGE_RATE_HISTORY_LIMIT = 25;

  public async getCurrentExchangeRate(): Promise<ExchangeRateEntity> {
    return this.repository.findOne({ where: {}, order: { id: 'DESC' } });
  }

  public async getExchangeRateHistory(): Promise<ExchangeRateEntity[]> {
    return this.repository
      .createQueryBuilder('exchange_rates')
      .limit(this.DEFAULT_EXCHANGE_RATE_HISTORY_LIMIT)
      .orderBy('id', 'DESC')
      .getMany();
  }

  public async create(
    exchangeRates: CreateExchangeRateDto[],
  ): Promise<ExchangeRateEntity[]> {
    const entities = exchangeRates.map((exchangeRate) => {
      const entity = new ExchangeRateEntity();

      entity.symbol = exchangeRate.symbol;
      entity.price = exchangeRate.price;

      return entity;
    });

    return this.repository.save(entities);
  }
}
