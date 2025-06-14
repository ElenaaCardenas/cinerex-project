import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pelicula, PeliculaDocument } from './schemas/pelicula.schema';

@Injectable()
export class PeliculasService {
  constructor(@InjectModel(Pelicula.name) private peliculaModel: Model<PeliculaDocument>) {}

  create(data: any) {
    const nueva = new this.peliculaModel(data);
    return nueva.save();
  }

  findAll() {
    return this.peliculaModel.find();
  }

  findOne(id: string) {
    return this.peliculaModel.findById(id);
  }

  update(id: string, data: any) {
    return this.peliculaModel.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id: string) {
    return this.peliculaModel.findByIdAndDelete(id);
  }
}
