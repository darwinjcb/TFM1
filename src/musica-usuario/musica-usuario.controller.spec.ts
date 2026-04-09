// src/musica-usuario/musica-usuario.controller.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { MusicaUsuarioController } from './musica-usuario.controller';
import { MusicaUsuarioService } from './musica-usuario.service';

describe('MusicaUsuarioController', () => {
  let controller: MusicaUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicaUsuarioController],
      providers: [MusicaUsuarioService],
    }).compile();

    controller = module.get<MusicaUsuarioController>(MusicaUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
