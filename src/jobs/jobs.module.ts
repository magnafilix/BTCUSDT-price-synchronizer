import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { ExchangeRatesModule } from '../exchange-rates/exchange-rates.module';

@Module({
  imports: [ExchangeRatesModule],
  providers: [JobsService],
})
export class JobsModule {}
