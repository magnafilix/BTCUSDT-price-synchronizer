import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

// entities
import { ExchangeRateEntity } from './src/exchange-rates/entities/exchange-rate.entity';

// migrations
import { CreateExchangeRate1675113175630 } from './migrations/1675113175630-CreateExchangeRate';

config();
const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  entities: [ExchangeRateEntity],
  migrations: [CreateExchangeRate1675113175630],
});
