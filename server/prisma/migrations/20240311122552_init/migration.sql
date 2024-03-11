-- CreateTable
CREATE TABLE "Utilisateur" (
    "id_utilisateur" SERIAL NOT NULL,
    "nom_utilisateur" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mot_de_passe" TEXT NOT NULL,
    "nom" TEXT,
    "prenom" TEXT,
    "photo" TEXT,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id_utilisateur")
);

-- CreateTable
CREATE TABLE "Projet" (
    "id_projet" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT,
    "categorie" TEXT NOT NULL,
    "montant_souhaite" DOUBLE PRECISION NOT NULL,
    "date_debut" TIMESTAMP(3) NOT NULL,
    "date_fin" TIMESTAMP(3) NOT NULL,
    "statut" TEXT NOT NULL,
    "id_createur" INTEGER NOT NULL,

    CONSTRAINT "Projet_pkey" PRIMARY KEY ("id_projet")
);

-- CreateTable
CREATE TABLE "Contribution" (
    "id_contribution" SERIAL NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "date_contribution" TIMESTAMP(3) NOT NULL,
    "id_projet" INTEGER NOT NULL,
    "id_contributeur" INTEGER NOT NULL,

    CONSTRAINT "Contribution_pkey" PRIMARY KEY ("id_contribution")
);

-- CreateTable
CREATE TABLE "Paiement" (
    "id_paiement" SERIAL NOT NULL,
    "montant_paye" DOUBLE PRECISION NOT NULL,
    "methode_paiement" TEXT NOT NULL,
    "statut_paiement" TEXT NOT NULL,
    "id_contribution" INTEGER NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("id_paiement")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Paiement_id_contribution_key" ON "Paiement"("id_contribution");

-- AddForeignKey
ALTER TABLE "Projet" ADD CONSTRAINT "Projet_id_createur_fkey" FOREIGN KEY ("id_createur") REFERENCES "Utilisateur"("id_utilisateur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_id_projet_fkey" FOREIGN KEY ("id_projet") REFERENCES "Projet"("id_projet") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_id_contributeur_fkey" FOREIGN KEY ("id_contributeur") REFERENCES "Utilisateur"("id_utilisateur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_id_contribution_fkey" FOREIGN KEY ("id_contribution") REFERENCES "Contribution"("id_contribution") ON DELETE RESTRICT ON UPDATE CASCADE;
