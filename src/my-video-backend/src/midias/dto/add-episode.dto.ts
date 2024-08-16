import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class AddEpisodeDto {
  @IsInt()
  @Min(1)
  @ApiProperty({
    example: 2,
  })
  season: number;

  @IsInt()
  @Min(1)
  @ApiProperty({
    example: 5,
  })
  episodeNumber: number;
}
