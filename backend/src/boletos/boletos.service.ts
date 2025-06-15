import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Boleto } from './schemas/boleto.schema';
import { Model } from 'mongoose';

@Injectable()
export class BoletosService {
  constructor(@InjectModel(Boleto.name) private boletoModel: Model<Boleto>) {}

  async comprar(data: { funcion: string; usuario: string; asiento: number }) {
    const existe = await this.boletoModel.findOne({
      funcion: data.funcion,
      asiento: data.asiento,
    });

    if (existe) {
      throw new BadRequestException('Ese asiento ya está ocupado');
    }

    return this.boletoModel.create(data);
  }

  findAll() {
    return this.boletoModel.find().populate('funcion').populate('usuario').exec();
  }

  findByUser(usuarioId: string) {
    return this.boletoModel.find({ usuario: usuarioId }).populate('funcion').exec();
  }
}
