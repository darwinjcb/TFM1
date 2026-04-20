// src/configuracion-comunicacion/infraestructura/configuracion-comunicacion/configuracion-comunicacion.controller.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguracionComunicacionController } from './configuracion-comunicacion.controller';
import { ConfiguracionComunicacionService } from './configuracion-comunicacion.service';

describe('ConfiguracionComunicacionController', () => {
  let controller: ConfiguracionComunicacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfiguracionComunicacionController],
      providers: [ConfiguracionComunicacionService],
    }).compile();

    controller = module.get<ConfiguracionComunicacionController>(ConfiguracionComunicacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
