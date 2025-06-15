import { Controller, Post, Get, Param, Body, Delete } from '@nestjs/common';
import { FuncionesService } from './funciones.service';
import { Funcion } from './schemas/funcion.schema';

@Controller('funciones')
export class FuncionesController {
  constructor(private readonly funcionesService: FuncionesService) {}

  @Post()
  create(@Body() data: Partial<Funcion>) {
    return this.funcionesService.create(data);
  }

  @Get()
  findAll() {
    return this.funcionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.funcionesService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.funcionesService.delete(id);
  }
}
