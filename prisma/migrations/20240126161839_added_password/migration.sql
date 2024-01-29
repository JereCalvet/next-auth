-- AlterTable
ALTER TABLE `Account` ADD COLUMN `password` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `password` VARCHAR(191) NULL;
