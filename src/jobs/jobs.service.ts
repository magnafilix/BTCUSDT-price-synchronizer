import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
// import { RatesService } from '../rates/rates.service';

@Injectable()
export class JobsService {
  private readonly logger = new Logger(JobsService.name);

  // constructor(private readonly ratesService: RatesService) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCron() {
    /**
     * here we
     * 1. call Binance API to get exchange rate history
     * 2. store received data to the database
     */

    // await this.ratesService.createRates([]);

    this.logger.debug('Called every 10 seconds');
  }
}
