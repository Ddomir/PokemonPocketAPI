/*
  Warnings:

  - Added the required column `stage` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Card" ADD COLUMN     "stage" INTEGER NOT NULL;
