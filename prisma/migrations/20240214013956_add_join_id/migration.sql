/*
  Warnings:

  - The required column `joinId` was added to the `Group` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "joinId" TEXT NOT NULL;
