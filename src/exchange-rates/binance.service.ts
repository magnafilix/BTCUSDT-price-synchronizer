import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

export interface TickerInfo {
  symbol: string;
  price: string;
}

@Injectable()
export class BinanceService {
  private readonly BINANCE_API_URL = 'https://api.binance.com';
  private readonly DEFAULT_SYMBOL = 'BTCUSDT';

  public async fetchCurrentTickerData(
    symbol = this.DEFAULT_SYMBOL,
  ): Promise<TickerInfo> {
    return fetch(
      `${this.BINANCE_API_URL}/api/v3/ticker/price?symbol=${symbol}`,
    ).then((res) => res.json());
  }
}
