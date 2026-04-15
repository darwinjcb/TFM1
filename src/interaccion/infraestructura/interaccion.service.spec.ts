// src/interaccion/infraestructura/interaccion.service.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { InteraccionService } from './interaccion.service';

describe('InteraccionService', () => {
  let service: InteraccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InteraccionService],
    }).compile();

    service = module.get<InteraccionService>(InteraccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
