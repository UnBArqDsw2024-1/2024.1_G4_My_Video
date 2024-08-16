import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateMidiaDto } from './create-midia.dto';

export class UpdateMidiaDto extends PartialType(
  OmitType(CreateMidiaDto, ['type']),
) {}
