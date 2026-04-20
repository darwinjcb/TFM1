// src/foto-usuario/infraestructura/foto-usuario.controller.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { FotoUsuarioController } from './foto-usuario.controller';
import { FotoUsuarioService } from './foto-usuario.service';

describe('FotoUsuarioController', () => {
  let controller: FotoUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FotoUsuarioController],
      providers: [FotoUsuarioService],
    }).compile();

    controller = module.get<FotoUsuarioController>(FotoUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
