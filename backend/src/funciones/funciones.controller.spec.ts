import { Test, TestingModule } from '@nestjs/testing';
import { FuncionesController } from './funciones.controller';

describe('FuncionesController', () => {
  let controller: FuncionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuncionesController],
    }).compile();

    controller = module.get<FuncionesController>(FuncionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
