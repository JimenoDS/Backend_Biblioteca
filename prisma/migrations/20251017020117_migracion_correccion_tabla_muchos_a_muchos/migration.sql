/*
  Warnings:

  - The primary key for the `profesor_materia` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "profesor_materia" DROP CONSTRAINT "profesor_materia_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "profesor_materia_pkey" PRIMARY KEY ("id");
