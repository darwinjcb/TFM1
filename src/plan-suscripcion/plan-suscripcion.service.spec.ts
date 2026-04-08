// src/plan-suscripcion/plan-suscripcion.service.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { PlanSuscripcionService } from './plan-suscripcion.service';

describe('PlanSuscripcionService', () => {
  let service: PlanSuscripcionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanSuscripcionService],
    }).compile();

    service = module.get<PlanSuscripcionService>(PlanSuscripcionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
