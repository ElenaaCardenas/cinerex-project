import { Module } from '@nestjs/common';
import { ServiceModule } from './service/service.module';
import { FuncionesController } from './funciones.controller';

@Module({
  imports: [ServiceModule],
  controllers: [FuncionesController]
})
export class FuncionesModule {}
