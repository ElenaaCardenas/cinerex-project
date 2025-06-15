import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoletosService } from './boletos.service';
import { BoletosController } from './boletos.controller';
import { Boleto, BoletoSchema } from './schemas/boleto.schema';
import { Funcion, FuncionSchema } from '../funciones/schemas/funcion.schema';
import { Usuario, UsuarioSchema } from '../auth/schemas/usuario.schema'; // Ajusta ruta si tu esquema está en auth

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Boleto.name, schema: BoletoSchema },
      { name: Funcion.name, schema: FuncionSchema },
      { name: Usuario.name, schema: UsuarioSchema },
    ]),
  ],
  controllers: [BoletosController],
  providers: [BoletosService],
})
export class BoletosModule {}
