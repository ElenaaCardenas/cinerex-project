import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sala } from './schemas/sala.schema';
import { Model } from 'mongoose';

@Injectable()
export class SalasService {
  constructor(@InjectModel(Sala.name) private readonly salaModel: Model<Sala>) {}

  create(data: Partial<Sala>) {
    return this.salaModel.create(data);
  }

  findAll() {
    return this.salaModel.find().exec();
  }

  findOne(id: string) {
    return this.salaModel.findById(id).exec();
  }

  remove(id: string) {
    return this.salaModel.findByIdAndDelete(id).exec();
  }
}
