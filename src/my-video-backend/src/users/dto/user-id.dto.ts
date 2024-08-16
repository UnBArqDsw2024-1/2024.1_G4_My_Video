import { IsUUID } from 'class-validator';

export class UserIdParam {
  @IsUUID()
  id: string;
}
