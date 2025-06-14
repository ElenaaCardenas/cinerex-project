import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PeliculaDocument = Pelicula & Document;

@Schema()
export class Pelicula {
  @Prop({ required: true })
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop()
  duracion: number;

  @Prop()
  genero: string;
}

export const PeliculaSchema = SchemaFactory.createForClass(Pelicula);
