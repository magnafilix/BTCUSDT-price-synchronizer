import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
// import { RatesService } from '../rates/rates.service';

@Module({
  providers: [JobsService],
})
export class JobsModule {}
