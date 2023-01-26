# Ticker/Coin(btcusdt) Price Synchronizer

## Description

Server application which periodically (every 10 seconds) fetches the BTCUSDT price (calling [binance](https://www.binance.com/en) api) and stores it into database. It also exposes api with:
- current rate
- exchange rate history

## Tech Stack

- Nest.js
- TypeScript
- GraphQL
- PostgreSQL
- Typeorm

## Installation

```bash
# install dependencies
$ npm install

# start docker services (only database for now)
$ docker-compose up -d
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


