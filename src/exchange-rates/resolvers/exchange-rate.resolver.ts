import { Resolver, Query } from '@nestjs/graphql';
import { RatesService } from '../exchange-rates.service';
import { ExchangeRate } from '../models/exchange-rate.model';

@Resolver()
export class RateResolver {
  constructor(private readonly ratesService: RatesService) {}

  @Query(() => ExchangeRate)
  async getCurrentExchangeRate(): Promise<ExchangeRate> {
    return this.ratesService.getCurrentExchangeRate();
  }

  @Query(() => [ExchangeRate])
  async getExchangeRateHistory(): Promise<ExchangeRate[]> {
    return this.ratesService.getExchangeRateHistory();
  }
}
