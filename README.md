# Ticker/Coin(btcusdt) Price Synchronizer

## Description

Server application which periodically fetches the BTCUSDT price (calling [binance](https://www.binance.com/en) api) and stores it into database. It also exposes api with:
- current rate
- exchange rate history

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```


