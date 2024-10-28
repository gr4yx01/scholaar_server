/*
  Warnings:

  - You are about to drop the column `country` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `degree` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "country",
DROP COLUMN "degree";
