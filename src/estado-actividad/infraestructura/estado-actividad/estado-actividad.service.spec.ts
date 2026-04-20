// src/estado-actividad/infraestructura/estado-actividad/estado-actividad.service.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { EstadoActividadService } from './estado-actividad.service';

describe('EstadoActividadService', () => {
  let service: EstadoActividadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoActividadService],
    }).compile();

    service = module.get<EstadoActividadService>(EstadoActividadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
