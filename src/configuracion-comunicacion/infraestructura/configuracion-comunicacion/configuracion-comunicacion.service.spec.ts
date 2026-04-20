// src/configuracion-comunicacion/infraestructura/configuracion-comunicacion/configuracion-comunicacion.service.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguracionComunicacionService } from './configuracion-comunicacion.service';

describe('ConfiguracionComunicacionService', () => {
  let service: ConfiguracionComunicacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfiguracionComunicacionService],
    }).compile();

    service = module.get<ConfiguracionComunicacionService>(ConfiguracionComunicacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
