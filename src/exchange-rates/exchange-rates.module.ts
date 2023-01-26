import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeRateEntity } from './entities/exchange-rate.entity';
import { ExchangeRatesService } from './exchange-rates.service';
import { BinanceService } from './binance.service';
import { RateResolver } from './resolvers/exchange-rate.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeRateEntity])],
  providers: [RateResolver, BinanceService, ExchangeRatesService],
  exports: [BinanceService, ExchangeRatesService],
})
export class ExchangeRatesModule {}
