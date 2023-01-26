import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeRateEntity } from './entities/exchange-rate.entity';
import { RatesService } from './exchange-rates.service';
import { BinanceService } from './binance.service';
import { RateResolver } from './resolvers/exchange-rate.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeRateEntity])],
  providers: [RateResolver, BinanceService, RatesService],
  exports: [BinanceService, RatesService],
})
export class RatesModule {}
