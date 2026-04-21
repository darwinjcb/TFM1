// src/restriccion-usuario/infraestructura/restriccion-usuario/restriccion-usuario.service.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { RestriccionUsuarioService } from './restriccion-usuario.service';

describe('RestriccionUsuarioService', () => {
  let service: RestriccionUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestriccionUsuarioService],
    }).compile();

    service = module.get<RestriccionUsuarioService>(RestriccionUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
