import { IsUUID } from 'class-validator';

export class UuidParam {
  @IsUUID()
  id: string;
}
