import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usuariosService: UsuariosService,
  ) {}

  @Post('register')
  async register(@Body() body: any) {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const nuevoUsuario = await this.usuariosService.create({
      ...body,
      password: hashedPassword,
    });
    return nuevoUsuario;
  }

  @Post('login')
  async login(@Body() body: any) {
    const user = await this.authService.validarUsuario(body.email, body.password);
    return this.authService.login(user);
  }
}
