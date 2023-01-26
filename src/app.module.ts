import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { JobsModule } from './jobs/jobs.module';
import { RatesModule } from './exchange-rates/exchange-rates.module';
import { ExchangeRateEntity } from './exchange-rates/entities/exchange-rate.entity';

/**
 * Add .env variables instead
 */

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'development',
      entities: [ExchangeRateEntity],
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    JobsModule,
    RatesModule,
  ],
})
export class AppModule {}
