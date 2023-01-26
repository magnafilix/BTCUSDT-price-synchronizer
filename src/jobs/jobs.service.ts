import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BinanceService } from '../exchange-rates/binance.service';
import { RatesService } from '../exchange-rates/exchange-rates.service';

@Injectable()
export class JobsService {
  private readonly logger = new Logger(JobsService.name);

  constructor(
    private readonly binanceService: BinanceService,
    private readonly ratesService: RatesService,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    const ticker = await this.binanceService.fetchCurrentTickerInfo();

    await this.ratesService.createRates([ticker]);

    this.logger.debug('Cron job called every 10 seconds');
  }
}
