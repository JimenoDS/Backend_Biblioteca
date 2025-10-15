import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TitulosService } from './titulos.service';
import { CreateTituloDto } from './dto/create-titulo.dto';
import { UpdateTituloDto } from './dto/update-titulo.dto';

@Controller('titulos')
export class TitulosController {
  constructor(private readonly titulosService: TitulosService) {}

  @Post()
  create(@Body() createTituloDto: CreateTituloDto) {
    return this.titulosService.create(createTituloDto);
  }

  @Get()
  findAll() {
    return this.titulosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.titulosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTituloDto: UpdateTituloDto) {
    return this.titulosService.update(+id, updateTituloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.titulosService.remove(+id);
  }
}
