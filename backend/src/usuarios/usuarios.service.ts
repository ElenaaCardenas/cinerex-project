import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from './schemas/usuario.schema';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) {}

  async create(data: any): Promise<any> {
    const nuevo = new this.usuarioModel(data);
    return nuevo.save();
  }

  async findByEmail(email: string): Promise<any> {
    return this.usuarioModel.findOne({ email });
  }
}

