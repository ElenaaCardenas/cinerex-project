import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { Pelicula, PeliculaSchema } from './schemas/pelicula.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pelicula.name, schema: PeliculaSchema }]),
  ],
  controllers: [PeliculasController],
  providers: [PeliculasService],
})
export class PeliculasModule {}
