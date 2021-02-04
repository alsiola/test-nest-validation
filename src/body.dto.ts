import { IsNumber } from 'class-validator';

export class BodyDTO {
  @IsNumber()
  age!: number;
}
