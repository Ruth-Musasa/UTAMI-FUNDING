const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const SearchController= {
    getSearchPost: async (req, res) => {
        const { q } = req.query; // q est le paramètre de recherche
        try {
          const projets = await prisma.Post.findMany({
            where: {
              OR: [
                { title: { contains: q, mode: 'insensitive' } }, // Recherche par titre (insensible à la casse)
                { description: { contains: q, mode: 'insensitive' } }, // Recherche par description (insensible à la casse)
                { categorie: { contains: q, mode: 'insensitive' } } // Recherche par catégorie (insensible à la casse)
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
        const { q } = req.query; // q est le paramètre de recherche
        try {
          const utilisateurs = await prisma.User.findMany({
            where: {
              OR: [
                { name_user: { contains: q, mode: 'insensitive' } }, // Recherche par nom d'utilisateur (insensible à la casse)
                { name : { contains: q, mode: 'insensitive' } }, // Recherche par nom (insensible à la casse)
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
