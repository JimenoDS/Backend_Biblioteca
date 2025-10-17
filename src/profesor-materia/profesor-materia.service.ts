import { Injectable, ConflictException } from '@nestjs/common';
import { CreateProfesorMateriaDto } from './dto/create-profesor-materia.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ProfesorMateriaService {
  constructor(private prisma: PrismaService) {}

  async create(createProfesorMateriaDto: CreateProfesorMateriaDto) {
    try {
      
      return await this.prisma.profesorMateria.create({
        data: createProfesorMateriaDto,
      });
    } catch (error) {
    
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('El profesor ya está asignado a esta materia.');
      }
      throw error;
    }
  }

  async findAll() {

    return this.prisma.profesorMateria.findMany({
      include: {
        profesor: {
          select: { id_profesor: true, nombres: true, apellidos: true },
        },
        materia: {
          select: { id_materia: true, nombre_materia: true, creditos: true },
        },
      },

    });


  }

 async findOne(id: number) {
    return this.prisma.profesorMateria.findUnique({where:{id:id}})
  };

  async remove(id: number) {
    return this.prisma.profesorMateria.delete({where:{id:id}})
  }

  async update(id: number, updateProfesorMateriaDto: CreateProfesorMateriaDto) {
    return this.prisma.profesorMateria.update({
      where: { id: id },
      data: updateProfesorMateriaDto,
    });
  }
}