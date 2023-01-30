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
- TypeORM

## Installation

Create `.env` file (inside the root directory) and copy variables from `.env.example` to `.env`.

Then run following commands:

```bash
# install dependencies
$ npm install

# start docker services (only database for now)
$ docker-compose up -d

# run the migrations
$ npm run migration:run
```

## TypeORM migrations

### Generating migration file

To auto-generate a migration file (sync database with all the fresh changes in the entities):

```bash
$ npm run migration:generate --name=NewMigrationName
```

After running the above command, make sure to import newly created migration to the root `type-orm.config.ts` file and add it to the existing array of `migrations`.

### Running the migrations

When running the application for first time or once we have the migration added to the `migrations` array (above step):

```bash
$ npm run migration:run
```

It identifies that the `migrations` array contains a migration that wasn’t executed yet, then it runs the `up` method.

### Reverting the migrations

To revert a migration:

```bash
$ npm run migration:revert
```

It executes the `down` method in the latest performed migration and removes the respective row from the `migrations` array. Therefore, if we need to revert more than one migration, we must use the command multiple times.

### Creating the migrations manually

To create a migration manually:

```bash
$ npm run migration:create --name=NewMigrationName
```

In addition to automatically generating the migration for us, we can write its logic (SQL `up` and `down` methods queries) manually.

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


