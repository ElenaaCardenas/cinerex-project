import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BoletosService } from './boletos.service';

@Controller('boletos')
export class BoletosController {
  constructor(private readonly boletosService: BoletosService) {}

  @Post()
  comprar(@Body() data: { funcion: string; usuario: string; asiento: number }) {
    return this.boletosService.comprar(data);
  }

  @Get()
  findAll() {
    return this.boletosService.findAll();
  }

  @Get('usuario/:id')
  findByUser(@Param('id') id: string) {
    return this.boletosService.findByUser(id);
  }
}
