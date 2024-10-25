/*
  Warnings:

  - You are about to drop the column `universityId` on the `Loan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_universityId_fkey";

-- AlterTable
ALTER TABLE "Loan" DROP COLUMN "universityId";

-- CreateTable
CREATE TABLE "LoanUniversity" (
    "id" TEXT NOT NULL,
    "loanId" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoanUniversity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoanUniversity" ADD CONSTRAINT "LoanUniversity_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanUniversity" ADD CONSTRAINT "LoanUniversity_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
