-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_abilityID_fkey";

-- AlterTable
ALTER TABLE "public"."Card" ALTER COLUMN "abilityID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Card" ADD CONSTRAINT "Card_abilityID_fkey" FOREIGN KEY ("abilityID") REFERENCES "public"."Ability"("id") ON DELETE SET NULL ON UPDATE CASCADE;
