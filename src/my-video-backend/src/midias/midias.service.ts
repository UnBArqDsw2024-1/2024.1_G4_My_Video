import { BadRequestException, Injectable } from '@nestjs/common';
import { Midia, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MidiasService {
  constructor(private prisma: PrismaService) {}

  isFilme(
    data: unknown,
  ): data is Prisma.MidiaCreateInput & Prisma.FilmeCreateInput {
    return (data as Prisma.MidiaCreateInput).type === 'FILME';
  }

  isSerie(
    data: unknown,
  ): data is Prisma.MidiaCreateInput & Prisma.SerieCreateInput {
    return (data as Prisma.MidiaCreateInput).type === 'SERIE';
  }

  addEpisode(data: Prisma.SerieEpisodeUncheckedCreateInput) {
    return this.prisma.serieEpisode.create({
      data,
    });
  }

  deleteEpisode(where: Prisma.SerieEpisodeWhereUniqueInput) {
    return this.prisma.serieEpisode.delete({
      where,
    });
  }

  create(
    data: Prisma.MidiaCreateInput &
      Prisma.FilmeCreateInput &
      Prisma.SerieCreateInput,
  ) {
    const { director, numberOfEpisodes, seasons, ...midiaData } = data;

    if (this.isFilme(data)) {
      return this.prisma.midia.create({
        data: { ...midiaData, Filme: { create: { director } } },
        include: { Filme: true },
      });
    }

    if (this.isSerie(data)) {
      return this.prisma.midia.create({
        data: {
          ...midiaData,
          Serie: { create: { numberOfEpisodes, seasons } },
        },
        include: { Serie: true },
      });
    }

    throw new BadRequestException('Midia should be a FILME or SERIE.');
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MidiaWhereUniqueInput;
    where?: Prisma.MidiaWhereInput;
    orderBy?: Prisma.MidiaOrderByWithRelationInput;
  }): Promise<Midia[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.midia.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { Filme: true, Serie: true },
    });
  }

  async findOneEpisode(
    serieEpisodeWhereUniqueInput: Prisma.SerieEpisodeWhereUniqueInput,
  ) {
    return this.prisma.serieEpisode.findUnique({
      where: serieEpisodeWhereUniqueInput,
      include: { Serie: true },
    });
  }

  async findOne(midiaWhereUniqueInput: Prisma.MidiaWhereUniqueInput) {
    return this.prisma.midia.findUnique({
      where: midiaWhereUniqueInput,
      include: { Filme: true, Serie: true },
    });
  }

  async update(params: {
    where: Prisma.MidiaWhereUniqueInput;
    data: Prisma.MidiaUpdateInput;
  }): Promise<Midia> {
    const { where, data } = params;
    return this.prisma.midia.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.MidiaWhereUniqueInput): Promise<Midia> {
    return this.prisma.midia.delete({
      where,
    });
  }
}
