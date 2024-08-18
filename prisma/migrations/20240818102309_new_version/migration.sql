-- AlterTable
ALTER TABLE "Education" ALTER COLUMN "userProfileId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Experience" ALTER COLUMN "userProfileId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "userProfileId" DROP NOT NULL,
ALTER COLUMN "userEducationId" DROP NOT NULL,
ALTER COLUMN "userExperienceId" DROP NOT NULL;
