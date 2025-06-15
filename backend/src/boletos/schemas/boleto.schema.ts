import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Boleto extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Funcion', required: true })
  funcion: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Usuario', required: true })
  usuario: Types.ObjectId;

  @Prop({ required: true })
  asiento: number;
}

export const BoletoSchema = SchemaFactory.createForClass(Boleto);
