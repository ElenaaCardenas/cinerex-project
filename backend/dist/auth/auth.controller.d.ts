import { AuthService } from './auth.service';
import { UsuariosService } from '../usuarios/usuarios.service';
export declare class AuthController {
    private authService;
    private usuariosService;
    constructor(authService: AuthService, usuariosService: UsuariosService);
    register(body: any): Promise<any>;
    login(body: any): Promise<{
        access_token: string;
    }>;
}
