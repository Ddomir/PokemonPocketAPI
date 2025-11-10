/*
  Warnings:

  - The `gen` column on the `Card` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Card" DROP COLUMN "gen",
ADD COLUMN     "gen" TEXT[];
