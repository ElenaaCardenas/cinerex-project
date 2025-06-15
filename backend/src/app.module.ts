import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { SalasModule } from './salas/salas.module';
import { FuncionesModule } from './funciones/funciones.module';
import { BoletosModule } from './boletos/boletos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsuariosModule,
    SalasModule,
    FuncionesModule,
    BoletosModule,
  ],
})
export class AppModule {}
