import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { InscripcionesService } from './inscripciones.service';
import { CreateInscripcioneDto } from './dto/create-inscripcione.dto';

@Controller('inscripciones')
export class InscripcionesController {
  constructor(private readonly inscripcionesService: InscripcionesService) {}

  @Post()
  create(@Body() createInscripcioneDto: CreateInscripcioneDto) {
    return this.inscripcionesService.create(createInscripcioneDto);
  }

  @Get()
  findAll() {
    return this.inscripcionesService.findAll();
  }

  @Get(':id')
  findOne(@Body('id') id: number) {
    return this.inscripcionesService.findOne(id);
  }

  @Patch(':id')
  update(@Body('id') id: number, @Body() updateInscripcioneDto: CreateInscripcioneDto) {
    return this.inscripcionesService.update(id, updateInscripcioneDto);
  }

  @Delete(':id')
  remove(@Body('id') id: number) {
    return this.inscripcionesService.remove(id);
  }
}