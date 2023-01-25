import { Resolver, Query } from '@nestjs/graphql';
import { RatesService } from '../rates.service';
import { Rate } from '../models/rate.model';

@Resolver()
export class RateResolver {
  constructor(private readonly ratesService: RatesService) {}

  @Query(() => String)
  async getCurrentRate(): Promise<string> {
    return this.ratesService.getCurrentRate();
  }

  @Query(() => [Rate])
  async getRateHistory(): Promise<Rate[]> {
    return this.ratesService.getRateHistory();
  }
}
