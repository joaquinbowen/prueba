/*
  Warnings:

  - Added the required column `usuarioId` to the `Contenido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Contenido` ADD COLUMN `favorito` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `usuarioId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Usuario` ADD COLUMN `rol` VARCHAR(191) NOT NULL DEFAULT 'cliente';

-- AddForeignKey
ALTER TABLE `Contenido` ADD CONSTRAINT `Contenido_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
