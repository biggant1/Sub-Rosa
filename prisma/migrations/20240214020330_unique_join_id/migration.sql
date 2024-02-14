/*
  Warnings:

  - A unique constraint covering the columns `[joinId]` on the table `Group` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Group_joinId_key" ON "Group"("joinId");
