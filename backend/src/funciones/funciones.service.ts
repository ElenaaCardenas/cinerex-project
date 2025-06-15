import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Funcion } from './schemas/funcion.schema';
import { Model } from 'mongoose';

@Injectable()
export class FuncionesService {
  constructor(@InjectModel(Funcion.name) private funcionModel: Model<Funcion>) {}

  create(data: Partial<Funcion>) {
    return this.funcionModel.create(data);
  }

  findAll() {
    return this.funcionModel.find().populate('pelicula').populate('sala').exec();
  }

  findOne(id: string) {
    return this.funcionModel.findById(id).populate('pelicula').populate('sala').exec();
  }

  delete(id: string) {
    return this.funcionModel.findByIdAndDelete(id).exec();
  }
}
