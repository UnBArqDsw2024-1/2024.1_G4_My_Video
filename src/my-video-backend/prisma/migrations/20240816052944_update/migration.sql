/*
  Warnings:

  - The primary key for the `Favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Filme` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Midia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Serie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `episodes` on the `Serie` table. All the data in the column will be lost.
  - The primary key for the `WatchLater` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Watched` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `thumb` to the `Midia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Midia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfEpisodes` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserTypes" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "MidiaTypes" AS ENUM ('FILME', 'SERIE');

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_midiaId_fkey";

-- DropForeignKey
ALTER TABLE "Filme" DROP CONSTRAINT "Filme_id_fkey";

-- DropForeignKey
ALTER TABLE "Serie" DROP CONSTRAINT "Serie_id_fkey";

-- DropForeignKey
ALTER TABLE "WatchLater" DROP CONSTRAINT "WatchLater_midiaId_fkey";

-- DropForeignKey
ALTER TABLE "Watched" DROP CONSTRAINT "Watched_midiaId_fkey";

-- AlterTable
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "midiaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Favorite_id_seq";

-- AlterTable
ALTER TABLE "Filme" DROP CONSTRAINT "Filme_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Filme_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Filme_id_seq";

-- AlterTable
ALTER TABLE "Midia" DROP CONSTRAINT "Midia_pkey",
ADD COLUMN     "thumb" TEXT NOT NULL,
ADD COLUMN     "type" "MidiaTypes" NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Midia_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Midia_id_seq";

-- AlterTable
ALTER TABLE "Serie" DROP CONSTRAINT "Serie_pkey",
DROP COLUMN "episodes",
ADD COLUMN     "numberOfEpisodes" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Serie_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Serie_id_seq";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "type" "UserTypes" NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE "WatchLater" DROP CONSTRAINT "WatchLater_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "midiaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "WatchLater_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "WatchLater_id_seq";

-- AlterTable
ALTER TABLE "Watched" DROP CONSTRAINT "Watched_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "midiaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Watched_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Watched_id_seq";

-- CreateTable
CREATE TABLE "SerieEpisode" (
    "id" TEXT NOT NULL,
    "season" INTEGER NOT NULL,
    "episodeNumber" INTEGER NOT NULL,
    "serieId" TEXT NOT NULL,

    CONSTRAINT "SerieEpisode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Filme" ADD CONSTRAINT "Filme_id_fkey" FOREIGN KEY ("id") REFERENCES "Midia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_id_fkey" FOREIGN KEY ("id") REFERENCES "Midia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SerieEpisode" ADD CONSTRAINT "SerieEpisode_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_midiaId_fkey" FOREIGN KEY ("midiaId") REFERENCES "Midia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchLater" ADD CONSTRAINT "WatchLater_midiaId_fkey" FOREIGN KEY ("midiaId") REFERENCES "Midia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watched" ADD CONSTRAINT "Watched_midiaId_fkey" FOREIGN KEY ("midiaId") REFERENCES "Midia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
