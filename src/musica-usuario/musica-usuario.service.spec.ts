// src/musica-usuario/musica-usuario.service.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { MusicaUsuarioService } from './musica-usuario.service';

describe('MusicaUsuarioService', () => {
  let service: MusicaUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicaUsuarioService],
    }).compile();

    service = module.get<MusicaUsuarioService>(MusicaUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
