import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { RatesModule } from '../exchange-rates/exchange-rates.module';

@Module({
  imports: [RatesModule],
  providers: [JobsService],
})
export class JobsModule {}
