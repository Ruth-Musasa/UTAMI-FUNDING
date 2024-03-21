const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CommentController = {
    getComment: async (req, res) => {
        const { idProjet } = req.params;
        try {
            const commentaires = await prisma.commentaire.findMany({
                where: {
                    id_projet: parseInt(idProjet)
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
        const { id_projet, id_utilisateur, contenu } = req.body;
        try {
            const commentaire = await prisma.commentaire.create({
                data: {
                    id_projet: parseInt(id_projet),
                    id_utilisateur: parseInt(id_utilisateur),
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
