/*
  Warnings:

  - You are about to drop the column `userProfileId` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `proficiency` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `userProfileId` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Permission` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `employmentType` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'SELF_EMPLOYED', 'FREELANCE', 'INTERNSHIP', 'TRAINEE');

-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('ON_SITE', 'HYBRID', 'REMOTE');

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_userEducationId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_userExperienceId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_userProfileId_fkey";

-- DropForeignKey
ALTER TABLE "Permission" DROP CONSTRAINT "Permission_userProfileId_fkey";

-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_userProfileId_fkey";

-- DropIndex
DROP INDEX "Permission_userProfileId_key";

-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "employmentType" "EmploymentType" NOT NULL;

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "locationType" "LocationType";

-- AlterTable
ALTER TABLE "Permission" DROP COLUMN "userProfileId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "proficiency",
DROP COLUMN "userProfileId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified";

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "emailVerified" BOOLEAN DEFAULT false,
ADD COLUMN     "phoneNumberVerified" BOOLEAN DEFAULT false,
ADD COLUMN     "sex" "Sex" NOT NULL;

-- CreateTable
CREATE TABLE "UserSkill" (
    "id" SERIAL NOT NULL,
    "skillId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "proficiency" "Proficiency" NOT NULL,

    CONSTRAINT "UserSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLanguage" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "languageId" INTEGER NOT NULL,
    "proficiency" "Proficiency" NOT NULL,

    CONSTRAINT "UserLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSkill_skillId_userId_key" ON "UserSkill"("skillId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLanguage_userId_languageId_key" ON "UserLanguage"("userId", "languageId");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_userId_key" ON "Permission"("userId");

-- AddForeignKey
ALTER TABLE "UserSkill" ADD CONSTRAINT "UserSkill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkill" ADD CONSTRAINT "UserSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_userExperienceId_fkey" FOREIGN KEY ("userExperienceId") REFERENCES "Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_userEducationId_fkey" FOREIGN KEY ("userEducationId") REFERENCES "Education"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLanguage" ADD CONSTRAINT "UserLanguage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLanguage" ADD CONSTRAINT "UserLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
