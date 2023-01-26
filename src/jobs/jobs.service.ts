import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BinanceService } from '../exchange-rates/binance.service';
import { ExchangeRatesService } from '../exchange-rates/exchange-rates.service';

@Injectable()
export class JobsService {
  private readonly logger = new Logger(JobsService.name);

  constructor(
    private readonly binanceService: BinanceService,
    private readonly exchangeRatesService: ExchangeRatesService,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron(): Promise<void> {
    await this.fetchAndStoreTickerData();

    this.logger.debug(`[fetchAndStoreTickerData] jobs run every 10 seconds`);
  }

  /**
   * fetchAndStoreTickerData
   * 1. calls binance api to get current ticker/coin data
   * 2. stores data to the database
   */
  private async fetchAndStoreTickerData(): Promise<void> {
    try {
      const ticker = await this.binanceService.fetchCurrentTickerData();
      await this.exchangeRatesService.create([ticker]);
    } catch (error) {
      this.logger.debug(
        'Error when fetching or storing ticker/coin data',
        error,
      );
    }
  }
}
