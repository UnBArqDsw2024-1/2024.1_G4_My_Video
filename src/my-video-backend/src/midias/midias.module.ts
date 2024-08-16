import { Module } from '@nestjs/common';
import { MidiasService } from './midias.service';
import { MidiasController } from './midias.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MidiasController],
  providers: [MidiasService, PrismaService, JwtService],
})
export class MidiasModule {}
