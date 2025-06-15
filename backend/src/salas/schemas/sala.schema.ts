import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Sala extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  capacidad: number;
}

export const SalaSchema = SchemaFactory.createForClass(Sala);
