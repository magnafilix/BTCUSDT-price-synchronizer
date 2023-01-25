import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRateDto {
  @IsString()
  @IsNotEmpty()
  public amount: string;
}
