const { PrismaClient } = require('@prisma/client');
const { commentProjet } = require('../../test/validation');
const prisma = new PrismaClient();

const CommentController = {
    getComment: async (req, res) => {
        const { idProjet } = req.params;
        try {
            const commentaires = await prisma.commentaire.findMany({
                include: {
                    creator: true,
                },
                where: {
                    id_post: parseInt(idProjet)
                },
                orderBy: {
                    date_creation: 'asc'
                }
            });
            res.json(commentaires);
        } catch (error) {
            console.error('Erreur lors de la récupération des commentaires :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des commentaires' });
        }
    },
    postComment: async (req, res) => {
        const { error, value } = commentProjet.validate({ ...req.body, id_creator: req.id_user });

        if (error) {
            console.error("Erreur de validation des données :", error);
            return res.status(400).json({ error: "Erreur de validation des données ", details: error.details });
        }
        const { id_post, id_creator, contenu } = value;
        try {
            const commentaire = await prisma.commentaire.create({
                data: {
                    id_post: parseInt(id_post),
                    id_creator,
                    contenu
                }
            });
            res.status(201).json(commentaire);
        } catch (error) {
            console.error('Erreur lors de la création du commentaire :', error);
            res.status(500).json({ message: 'Erreur lors de la création du commentaire' });
        }
    },
    deleteComment: async (req, res) => {
        const { id } = req.params;
        try {
            await prisma.commentaire.delete({
                where: {
                    id_commentaire: parseInt(id)
                }
            });
            res.json({ message: 'Commentaire supprimé avec succès' });
        } catch (error) {
            console.error('Erreur lors de la suppression du commentaire :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression du commentaire' });
        }
    }
}


module.exports = CommentController;
