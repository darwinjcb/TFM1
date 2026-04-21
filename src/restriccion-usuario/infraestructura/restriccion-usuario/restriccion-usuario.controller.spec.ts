// src/restriccion-usuario/infraestructura/restriccion-usuario/restriccion-usuario.controller.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { RestriccionUsuarioController } from './restriccion-usuario.controller';
import { RestriccionUsuarioService } from './restriccion-usuario.service';

describe('RestriccionUsuarioController', () => {
  let controller: RestriccionUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestriccionUsuarioController],
      providers: [RestriccionUsuarioService],
    }).compile();

    controller = module.get<RestriccionUsuarioController>(RestriccionUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
