import { NotEquals } from 'class-validator';

export class BodyDTO {
  @NotEquals(null)
  name!: string;
}
