import { ApiProperty } from '@nestjs/swagger';
import { MidiaTypes } from '@prisma/client';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUrl,
  Min,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class CreateMidiaDto {
  @ApiProperty({ example: 'The Matrix', minLength: 3 })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @ApiProperty({ example: 'https://example.com/matrix-thumb.jpg' })
  @IsUrl()
  thumb: string;

  @ApiProperty({ example: 'A groundbreaking sci-fi film.' })
  @IsString()
  description: string;

  @ApiProperty({ example: 1999, minimum: 1800 })
  @IsInt()
  @IsNotEmpty()
  @Min(1800)
  debutYear: number;

  @ApiProperty({ example: 136, minimum: 1 })
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  duration: number;

  @ApiProperty({ example: ['sci-fi', 'action'], type: [String] })
  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @IsString()
  @IsIn(['FILME', 'SERIE'])
  @ApiProperty({
    example: 'FILME',
    enum: MidiaTypes,
  })
  type: MidiaTypes;

  @ValidateIf((o) => o.type === 'FILME')
  @IsString()
  @ApiProperty({
    example: 'Director name',
  })
  director: string;

  @ValidateIf((o) => o.type === 'SERIE')
  @IsInt()
  @Min(1)
  @ApiProperty({
    example: 2,
  })
  seasons: number;

  @ValidateIf((o) => o.type === 'SERIE')
  @IsInt()
  @Min(1)
  @ApiProperty({
    example: 5,
  })
  numberOfEpisodes: number;
}
