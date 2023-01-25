import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatesService } from './rates.service';
import { RateResolver } from './resolvers/rate.resolver';
import { RateEntity } from './entities/rate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RateEntity])],
  providers: [RatesService, RateResolver],
})
export class RatesModule {}
