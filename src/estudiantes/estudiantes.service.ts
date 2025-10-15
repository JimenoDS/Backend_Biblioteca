// src/modulos/estudiantes/estudiantes.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';

@Injectable()
export class EstudiantesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEstudianteDto) {
   
    return this.prisma.estudiante.create({
      data: dto,
    });
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
  
    const total = await this.prisma.estudiante.count();
    
    const estudiantes = await this.prisma.estudiante.findMany({
      skip: skip,
      take: Number(limit),
    });
    
    return {
      data: estudiantes,
      total,
      page,
      limit,
    };
  }

  async findOne(id: number) {
    
    const estudiante = await this.prisma.estudiante.findUnique({
      where: { id_estudiante: id },
    });
    
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID #${id} no encontrado`);
    }
    
    return estudiante;
  }
}
