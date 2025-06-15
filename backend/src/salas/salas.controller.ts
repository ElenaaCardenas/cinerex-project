import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SalasService } from './salas.service';
import { Sala } from './schemas/sala.schema';

@Controller('salas')
export class SalasController {
  constructor(private readonly salasService: SalasService) {}

  @Post()
  create(@Body() data: Partial<Sala>) {
    return this.salasService.create(data);
  }

  @Get()
  findAll() {
    return this.salasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salasService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salasService.remove(id);
  }
}
