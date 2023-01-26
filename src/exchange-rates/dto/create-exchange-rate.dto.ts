import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExchangeRateDto {
  @IsString()
  @IsNotEmpty()
  public symbol: string;

  @IsString()
  @IsNotEmpty()
  public price: string;
}
