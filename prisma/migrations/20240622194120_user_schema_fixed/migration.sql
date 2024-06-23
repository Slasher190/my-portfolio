-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_userEducationId_fkey";

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "userEducationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_userEducationId_fkey" FOREIGN KEY ("userEducationId") REFERENCES "Education"("id") ON DELETE SET NULL ON UPDATE CASCADE;
