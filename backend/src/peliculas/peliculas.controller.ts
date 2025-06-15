import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Post()
  create(@Body() body: any) {
    return this.peliculasService.create(body);
  }

  @Get()
  findAll() {
    return this.peliculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peliculasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.peliculasService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.peliculasService.delete(id);
  }
}
