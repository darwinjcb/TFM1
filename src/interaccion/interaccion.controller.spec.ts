// src/interaccion/interaccion.controller.spec.ts:
import { Test, TestingModule } from '@nestjs/testing';
import { InteraccionController } from './interaccion.controller';
import { InteraccionService } from './interaccion.service';

describe('InteraccionController', () => {
  let controller: InteraccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InteraccionController],
      providers: [InteraccionService],
    }).compile();

    controller = module.get<InteraccionController>(InteraccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
