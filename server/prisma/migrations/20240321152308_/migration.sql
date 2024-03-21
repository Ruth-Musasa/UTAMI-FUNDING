-- CreateTable
CREATE TABLE "Commentaire" (
    "id_commentaire" SERIAL NOT NULL,
    "id_post" INTEGER NOT NULL,
    "id_creator" INTEGER NOT NULL,
    "contenu" TEXT NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Commentaire_pkey" PRIMARY KEY ("id_commentaire")
);

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "Post"("id_post") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_id_creator_fkey" FOREIGN KEY ("id_creator") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
