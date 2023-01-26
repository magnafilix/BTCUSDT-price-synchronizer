import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Rate {
  @Field(() => Int)
  id: number;

  @Field()
  price: string;
}
