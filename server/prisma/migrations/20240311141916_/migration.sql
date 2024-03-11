/*
  Warnings:

  - You are about to drop the column `id_Post` on the `Contribution` table. All the data in the column will be lost.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_Post` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_User` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name_User` on the `User` table. All the data in the column will be lost.
  - Added the required column `id_post` to the `Contribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_user` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contribution" DROP CONSTRAINT "Contribution_id_Post_fkey";

-- DropForeignKey
ALTER TABLE "Contribution" DROP CONSTRAINT "Contribution_id_contributeur_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_id_creator_fkey";

-- AlterTable
ALTER TABLE "Contribution" DROP COLUMN "id_Post",
ADD COLUMN     "id_post" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "id_Post",
ADD COLUMN     "id_post" SERIAL NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id_post");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id_User",
DROP COLUMN "name_User",
ADD COLUMN     "id_user" SERIAL NOT NULL,
ADD COLUMN     "name_user" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id_user");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_id_creator_fkey" FOREIGN KEY ("id_creator") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_id_contributeur_fkey" FOREIGN KEY ("id_contributeur") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
