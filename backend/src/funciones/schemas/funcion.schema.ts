import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Funcion extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Pelicula', required: true })
  pelicula: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Sala', required: true })
  sala: Types.ObjectId;

  @Prop({ required: true })
  fecha: string; // Ej: "2025-06-14"

  @Prop({ required: true })
  hora: string; // Ej: "20:30"
}

export const FuncionSchema = SchemaFactory.createForClass(Funcion);
