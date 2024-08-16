/*
  Warnings:

  - A unique constraint covering the columns `[titleSlug]` on the table `Midia` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `titleSlug` to the `Midia` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_midiaId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_userId_fkey";

-- DropForeignKey
ALTER TABLE "Filme" DROP CONSTRAINT "Filme_id_fkey";

-- DropForeignKey
ALTER TABLE "Serie" DROP CONSTRAINT "Serie_id_fkey";

-- DropForeignKey
ALTER TABLE "SerieEpisode" DROP CONSTRAINT "SerieEpisode_serieId_fkey";

-- DropForeignKey
ALTER TABLE "WatchLater" DROP CONSTRAINT "WatchLater_midiaId_fkey";

-- DropForeignKey
ALTER TABLE "WatchLater" DROP CONSTRAINT "WatchLater_userId_fkey";

-- DropForeignKey
ALTER TABLE "Watched" DROP CONSTRAINT "Watched_midiaId_fkey";

-- DropForeignKey
ALTER TABLE "Watched" DROP CONSTRAINT "Watched_userId_fkey";

-- AlterTable
ALTER TABLE "Midia" ADD COLUMN     "titleSlug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Midia_titleSlug_key" ON "Midia"("titleSlug");

-- AddForeignKey
ALTER TABLE "Filme" ADD CONSTRAINT "Filme_id_fkey" FOREIGN KEY ("id") REFERENCES "Midia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_id_fkey" FOREIGN KEY ("id") REFERENCES "Midia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SerieEpisode" ADD CONSTRAINT "SerieEpisode_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_midiaId_fkey" FOREIGN KEY ("midiaId") REFERENCES "Midia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchLater" ADD CONSTRAINT "WatchLater_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchLater" ADD CONSTRAINT "WatchLater_midiaId_fkey" FOREIGN KEY ("midiaId") REFERENCES "Midia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watched" ADD CONSTRAINT "Watched_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watched" ADD CONSTRAINT "Watched_midiaId_fkey" FOREIGN KEY ("midiaId") REFERENCES "Midia"("id") ON DELETE CASCADE ON UPDATE CASCADE;
