import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FuncionesService } from './funciones.service';
import { FuncionesController } from './funciones.controller';
import { Funcion, FuncionSchema } from './schemas/funcion.schema';
import { Pelicula, PeliculaSchema } from '../peliculas/schemas/pelicula.schema';
import { Sala, SalaSchema } from '../salas/schemas/sala.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Funcion.name, schema: FuncionSchema },
      { name: Pelicula.name, schema: PeliculaSchema },
      { name: Sala.name, schema: SalaSchema },
    ]),
  ],
  controllers: [FuncionesController],
  providers: [FuncionesService],
})
export class FuncionesModule {}
