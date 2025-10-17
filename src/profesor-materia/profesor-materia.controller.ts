import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { ProfesorMateriaService } from './profesor-materia.service';
import { CreateProfesorMateriaDto } from './dto/create-profesor-materia.dto';

@Controller('profesor-materia')
export class ProfesorMateriaController {
  constructor(private readonly profesorMateriaService: ProfesorMateriaService) {}

  @Post()
  create(@Body() createProfesorMateriaDto: CreateProfesorMateriaDto) {
    return this.profesorMateriaService.create(createProfesorMateriaDto);
  }

  @Get() 
  findAll() {
    return this.profesorMateriaService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.profesorMateriaService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.profesorMateriaService.remove(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateProfesorMateriaDto: CreateProfesorMateriaDto) {
    return this.profesorMateriaService.update(id, updateProfesorMateriaDto);
  }

}