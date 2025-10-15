// src/modulos/estudiantes/estudiantes.controller.ts
import { Controller, Get, Post, Body, Param, ParseIntPipe, Query, DefaultValuePipe } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';

@Controller('estudiantes') // URL base para este controlador: /estudiantes
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  // Endpoint para POST /estudiantes
  @Post()
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudiantesService.create(createEstudianteDto);
  }

  // Endpoint para GET /estudiantes?page=1&limit=10
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.estudiantesService.findAll(page, limit);
  }

  // Endpoint para GET /estudiantes/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estudiantesService.findOne(id);
  }
}