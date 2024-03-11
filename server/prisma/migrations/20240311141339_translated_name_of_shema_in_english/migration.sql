/*
  Warnings:

  - You are about to drop the column `montant` on the `Contribution` table. All the data in the column will be lost.
  - You are about to drop the column `date_debut` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `date_fin` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `id_createur` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `montant_souhaite` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `titre` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `mot_de_passe` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nom_User` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Paiement` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount` to the `Contribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desired_amount` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_date` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_creator` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_User` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Paiement" DROP CONSTRAINT "Paiement_id_contribution_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_id_createur_fkey";

-- AlterTable
ALTER TABLE "Contribution" DROP COLUMN "montant",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "date_debut",
DROP COLUMN "date_fin",
DROP COLUMN "id_createur",
DROP COLUMN "montant_souhaite",
DROP COLUMN "titre",
ADD COLUMN     "desired_amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "end_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "id_creator" INTEGER NOT NULL,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "mot_de_passe",
DROP COLUMN "nom",
DROP COLUMN "nom_User",
ADD COLUMN     "name" TEXT,
ADD COLUMN     "name_User" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "Paiement";

-- CreateTable
CREATE TABLE "Payment" (
    "id_Payment" SERIAL NOT NULL,
    "amount_paye" DOUBLE PRECISION NOT NULL,
    "id_contribution" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id_Payment")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_id_contribution_key" ON "Payment"("id_contribution");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_id_creator_fkey" FOREIGN KEY ("id_creator") REFERENCES "User"("id_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_id_contribution_fkey" FOREIGN KEY ("id_contribution") REFERENCES "Contribution"("id_contribution") ON DELETE RESTRICT ON UPDATE CASCADE;
