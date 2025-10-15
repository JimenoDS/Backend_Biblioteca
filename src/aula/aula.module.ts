import { Module } from '@nestjs/common';
import { AulasService } from './aula.service';
import { AulasController } from './aula.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; 

@Module({
  imports: [PrismaModule],
  controllers: [AulasController],
  providers: [AulasService],
})
export class AulasModule {}
