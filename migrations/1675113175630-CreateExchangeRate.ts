import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateExchangeRate1675113175630 implements MigrationInterface {
  name = 'CreateExchangeRate1675113175630';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "exchange_rates" ("id" SERIAL NOT NULL, "symbol" character varying NOT NULL, "price" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_33a614bad9e61956079d817ebe2" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "exchange_rates"`);
  }
}
