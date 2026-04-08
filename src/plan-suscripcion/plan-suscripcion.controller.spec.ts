// src/plan-suscripcion/plan-suscripcion.controller.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { PlanSuscripcionController } from './plan-suscripcion.controller';
import { PlanSuscripcionService } from './plan-suscripcion.service';

describe('PlanSuscripcionController', () => {
  let controller: PlanSuscripcionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanSuscripcionController],
      providers: [PlanSuscripcionService],
    }).compile();

    controller = module.get<PlanSuscripcionController>(PlanSuscripcionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
