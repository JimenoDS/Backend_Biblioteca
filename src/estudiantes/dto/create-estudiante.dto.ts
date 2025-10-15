// src/modulos/estudiantes/dto/create-estudiante.dto.ts
import { IsString, IsNotEmpty, IsEmail, Length, IsOptional, IsDateString } from 'class-validator';

export class CreateEstudianteDto {
  @IsString({ message: 'El nombre debe ser texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombres: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 10, { message: 'La cédula debe tener 10 dígitos' })
  cedula: string;

  @IsEmail({}, { message: 'El formato del email no es válido' })
  @IsNotEmpty()
  email: string;

  @IsDateString({}, { message: 'La fecha debe tener el formato YYYY-MM-DD' })
  @IsOptional()
  fecha_nacimiento?: string;
}