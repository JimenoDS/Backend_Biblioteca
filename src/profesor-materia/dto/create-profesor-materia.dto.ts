// src/modulos/profesor-materia/dto/create-profesor-materia.dto.ts

import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateProfesorMateriaDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty({ message: 'El ID del profesor es obligatorio' })
  id_profesor: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty({ message: 'El ID de la materia es obligatorio' })
  id_materia: number;
}
