/*
  Warnings:

  - You are about to drop the column `id_projet` on the `Contribution` table. All the data in the column will be lost.
  - You are about to drop the column `methode_paiement` on the `Paiement` table. All the data in the column will be lost.
  - You are about to drop the column `statut_paiement` on the `Paiement` table. All the data in the column will be lost.
  - You are about to drop the `Projet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Utilisateur` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_Post` to the `Contribution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contribution" DROP CONSTRAINT "Contribution_id_contributeur_fkey";

-- DropForeignKey
ALTER TABLE "Contribution" DROP CONSTRAINT "Contribution_id_projet_fkey";

-- DropForeignKey
ALTER TABLE "Projet" DROP CONSTRAINT "Projet_id_createur_fkey";

-- AlterTable
ALTER TABLE "Contribution" DROP COLUMN "id_projet",
ADD COLUMN     "id_Post" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Paiement" DROP COLUMN "methode_paiement",
DROP COLUMN "statut_paiement";

-- DropTable
DROP TABLE "Projet";

-- DropTable
DROP TABLE "Utilisateur";

-- CreateTable
CREATE TABLE "User" (
    "id_User" SERIAL NOT NULL,
    "nom_User" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mot_de_passe" TEXT NOT NULL,
    "nom" TEXT,
    "photo" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_User")
);

-- CreateTable
CREATE TABLE "Post" (
    "id_Post" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT,
    "categorie" TEXT NOT NULL,
    "montant_souhaite" DOUBLE PRECISION NOT NULL,
    "date_debut" TIMESTAMP(3) NOT NULL,
    "date_fin" TIMESTAMP(3) NOT NULL,
    "id_createur" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id_Post")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_id_createur_fkey" FOREIGN KEY ("id_createur") REFERENCES "User"("id_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_id_Post_fkey" FOREIGN KEY ("id_Post") REFERENCES "Post"("id_Post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_id_contributeur_fkey" FOREIGN KEY ("id_contributeur") REFERENCES "User"("id_User") ON DELETE RESTRICT ON UPDATE CASCADE;
