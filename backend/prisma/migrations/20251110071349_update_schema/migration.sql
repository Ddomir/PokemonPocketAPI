/*
  Warnings:

  - The `packs` column on the `Card` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Card" DROP COLUMN "packs",
ADD COLUMN     "packs" TEXT[],
ALTER COLUMN "gen" SET NOT NULL,
ALTER COLUMN "gen" SET DATA TYPE TEXT;
