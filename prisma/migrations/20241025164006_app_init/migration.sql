/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `Loan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Scholarship` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_stateId_fkey";

-- AlterTable
ALTER TABLE "Loan" ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Scholarship" ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");
