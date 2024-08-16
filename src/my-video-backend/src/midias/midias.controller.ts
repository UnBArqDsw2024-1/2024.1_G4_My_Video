import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import slugify from 'slugify';
import { AuthAdminGuard } from 'src/auth/authAdmin.guard';
import { UuidParam } from 'src/shared/uuid-param.dto';
import { CreateMidiaDto } from './dto/create-midia.dto';
import { MidiasService } from './midias.service';
import { AddEpisodeDto } from './dto/add-episode.dto';

@ApiTags('midias')
@Controller('midias')
export class MidiasController {
  constructor(private readonly midiasService: MidiasService) {}

  @ApiBearerAuth()
  @UseGuards(AuthAdminGuard)
  @ApiParam({ name: 'id', type: 'string' })
  @Delete(':midiaId/delete-episode/:id')
  async deleteSerieEpisode(@Param() { id }: UuidParam) {
    const ep = await this.midiasService.findOneEpisode({
      id,
    });

    if (!ep) {
      throw new NotFoundException(`Episode  with id ${id} not found.`);
    }

    return this.midiasService.deleteEpisode({
      id,
    });
  }

  @ApiBearerAuth()
  @UseGuards(AuthAdminGuard)
  @ApiParam({ name: 'id', type: 'string' })
  @Post(':id/add-episode')
  async addSerieEpisode(
    @Param() { id }: UuidParam,
    @Body() addEpisodeDto: AddEpisodeDto,
  ) {
    const midia = await this.midiasService.findOne({
      id,
      type: 'SERIE',
    });

    if (!midia) {
      throw new BadRequestException(
        `Midia with type "SERIE" and id ${id} not found.`,
      );
    }

    return this.midiasService.addEpisode({
      ...addEpisodeDto,
      serieId: midia.Serie.id,
    });
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  findOne(@Param() { id }: UuidParam) {
    return this.midiasService.findOne({ id });
  }

  @ApiBearerAuth()
  @UseGuards(AuthAdminGuard)
  @ApiParam({ name: 'id', type: 'string' })
  @Delete(':id')
  remove(@Param() { id }: UuidParam) {
    return this.midiasService.remove({ id });
  }

  @ApiBearerAuth()
  @UseGuards(AuthAdminGuard)
  @Post()
  async create(@Body() createMidiaDto: CreateMidiaDto) {
    const titleSlug = slugify(createMidiaDto.title, { lower: true });

    const midia = await this.midiasService.findOne({
      titleSlug,
    });

    if (midia) {
      throw new BadRequestException(
        `Midia with title ${titleSlug} already exists.`,
      );
    }

    return this.midiasService.create({
      ...createMidiaDto,
      titleSlug,
    });
  }

  @Get()
  findAll() {
    return this.midiasService.findAll({});
  }
}
