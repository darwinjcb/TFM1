// src/estado-actividad/infraestructura/estado-actividad/estado-actividad.controller.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { EstadoActividadController } from './estado-actividad.controller';
import { EstadoActividadService } from './estado-actividad.service';

describe('EstadoActividadController', () => {
  let controller: EstadoActividadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoActividadController],
      providers: [EstadoActividadService],
    }).compile();

    controller = module.get<EstadoActividadController>(EstadoActividadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
