/*
  Warnings:

  - You are about to drop the column `passwordResetExpires` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passwordResetToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Proficiency" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "passwordResetExpires",
DROP COLUMN "passwordResetToken";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "locationId" INTEGER,
    "firstName" VARCHAR(50) NOT NULL,
    "middleName" VARCHAR(50),
    "lastName" VARCHAR(50) NOT NULL,
    "headline" VARCHAR(255),
    "summary" VARCHAR(255),
    "phoneNumber" TEXT,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "userProfileId" INTEGER,
    "title" VARCHAR(255) NOT NULL,
    "company" VARCHAR(255) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" SERIAL NOT NULL,
    "userProfileId" INTEGER,
    "institution" VARCHAR(255) NOT NULL,
    "degree" VARCHAR(255) NOT NULL,
    "fieldOfStudy" VARCHAR(255) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "userProfileId" INTEGER,
    "name" VARCHAR(255) NOT NULL,
    "proficiency" "Proficiency" NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "userProfileId" INTEGER,
    "userEducationId" INTEGER NOT NULL,
    "userExperienceId" INTEGER,
    "country" VARCHAR(50) NOT NULL,
    "state" VARCHAR(50),
    "city" VARCHAR(50) NOT NULL,
    "coordinates" VARCHAR(100),

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" SERIAL NOT NULL,
    "userProfileId" INTEGER NOT NULL,
    "isEmailVisible" BOOLEAN NOT NULL DEFAULT false,
    "isPhoneVisible" BOOLEAN NOT NULL DEFAULT false,
    "isDateOfBirthVisible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_userProfileId_key" ON "Experience"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "Education_userProfileId_key" ON "Education"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_userProfileId_key" ON "Location"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_userEducationId_key" ON "Location"("userEducationId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_userExperienceId_key" ON "Location"("userExperienceId");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_userProfileId_key" ON "Permission"("userProfileId");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_userExperienceId_fkey" FOREIGN KEY ("userExperienceId") REFERENCES "Experience"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_userEducationId_fkey" FOREIGN KEY ("userEducationId") REFERENCES "Education"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
