import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExchangeRate {
  @Field(() => Int)
  id: number;

  @Field()
  symbol: string;

  @Field()
  price: string;
}
