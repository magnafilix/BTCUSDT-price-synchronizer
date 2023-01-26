/* eslint-disable @typescript-eslint/ban-types */
import { Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ExchangeRatesService } from './exchange-rates.service';
import { ExchangeRateEntity } from './entities/exchange-rate.entity';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export const repositoryMockFactory: () => MockType<
  Repository<ExchangeRateEntity>
> = jest.fn(() => ({
  findOne: jest.fn((entity) => entity),
}));

describe('ExchangeRatesService', () => {
  let service: ExchangeRatesService;
  let repositoryMock: MockType<Repository<ExchangeRateEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExchangeRatesService,
        {
          provide: getRepositoryToken(ExchangeRateEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<ExchangeRatesService>(ExchangeRatesService);
    repositoryMock = module.get(getRepositoryToken(ExchangeRateEntity));
  });

  it('should get current exchange rate', async () => {
    const currentExchangeRate = {
      id: 258,
      price: '23015.00000000',
      symbol: 'BTCUSDT',
    };

    repositoryMock.findOne.mockReturnValue(currentExchangeRate);

    expect(await service.getCurrentExchangeRate()).toEqual(currentExchangeRate);
  });
});
