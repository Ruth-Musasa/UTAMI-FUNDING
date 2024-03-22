const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { searchPosts, searchUsers } =require ( '../../test/validation');

const SearchController = {
    getSearchPost: async (req, res) => {
        const { error, value } =searchPosts.validate(req.query);
        if (error){
            console.error('Erreur de validation des données:', error);
            return res.status(400).json({ message: 'Données de projet invalides', error: error.details });
        }
        const { q } = value;
        try {
            const projets = await prisma.Post.findMany({
                where: {
                    OR: [
                        { title: { contains: q, mode: 'insensitive' } },
                        { description: { contains: q, mode: 'insensitive' } },
                        { categorie: { contains: q, mode: 'insensitive' } }
                    ]
                }
            });
            res.json(projets);
        } catch (error) {
            console.error('Erreur lors de la recherche des projets :', error);
            res.status(500).json({ message: 'Erreur lors de la recherche des projets' });
        }
    },
    getSearchUsers: async (req, res) => {
        const { q } = req.query;
        try {
            const utilisateurs = await prisma.User.findMany({
                where: {
                    OR: [
                        { name_user: { contains: q, mode: 'insensitive' } },
                        { name: { contains: q, mode: 'insensitive' } },
                    ]
                }
            });
            res.json(utilisateurs);
        } catch (error) {
            console.error('Erreur lors de la recherche des utilisateurs :', error);
            res.status(500).json({ message: 'Erreur lors de la recherche des utilisateurs' });
        }
    }
}


module.exports = SearchController;
