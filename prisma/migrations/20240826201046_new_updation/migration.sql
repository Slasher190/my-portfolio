/*
  Warnings:

  - The `state` column on the `Location` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `country` on the `Location` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `city` on the `Location` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "country",
ADD COLUMN     "country" INTEGER NOT NULL,
DROP COLUMN "state",
ADD COLUMN     "state" INTEGER,
DROP COLUMN "city",
ADD COLUMN     "city" INTEGER NOT NULL;
