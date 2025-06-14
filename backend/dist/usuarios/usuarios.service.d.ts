import { Model } from 'mongoose';
import { UsuarioDocument } from './schemas/usuario.schema';
export declare class UsuariosService {
    private usuarioModel;
    constructor(usuarioModel: Model<UsuarioDocument>);
    create(data: any): Promise<any>;
    findByEmail(email: string): Promise<any>;
}
