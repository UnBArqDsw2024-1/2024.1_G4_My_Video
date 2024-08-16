import { Test, TestingModule } from '@nestjs/testing';
import { MidiasService } from './midias.service';

describe('MidiasService', () => {
  let service: MidiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MidiasService],
    }).compile();

    service = module.get<MidiasService>(MidiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
