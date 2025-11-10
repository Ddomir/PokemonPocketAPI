-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_move1ID_fkey";

-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_move2ID_fkey";

-- AlterTable
ALTER TABLE "public"."Card" ALTER COLUMN "move1ID" DROP NOT NULL,
ALTER COLUMN "move2ID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Card" ADD CONSTRAINT "Card_move1ID_fkey" FOREIGN KEY ("move1ID") REFERENCES "public"."Move"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Card" ADD CONSTRAINT "Card_move2ID_fkey" FOREIGN KEY ("move2ID") REFERENCES "public"."Move"("id") ON DELETE SET NULL ON UPDATE CASCADE;
