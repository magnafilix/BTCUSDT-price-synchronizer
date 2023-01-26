import { Resolver, Query } from '@nestjs/graphql';
import { ExchangeRatesService } from '../exchange-rates.service';
import { ExchangeRate } from '../models/exchange-rate.model';

@Resolver()
export class RateResolver {
  constructor(private readonly exchangeRatesService: ExchangeRatesService) {}

  @Query(() => ExchangeRate)
  async getCurrentExchangeRate(): Promise<ExchangeRate> {
    return this.exchangeRatesService.getCurrentExchangeRate();
  }

  @Query(() => [ExchangeRate])
  async getExchangeRateHistory(): Promise<ExchangeRate[]> {
    return this.exchangeRatesService.getExchangeRateHistory();
  }
}
