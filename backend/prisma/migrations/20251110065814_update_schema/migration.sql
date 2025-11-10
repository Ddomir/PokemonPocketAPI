/*
  Warnings:

  - Added the required column `rarity` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Card" ADD COLUMN     "rarity" INTEGER NOT NULL,
ALTER COLUMN "gen" SET DATA TYPE TEXT;
