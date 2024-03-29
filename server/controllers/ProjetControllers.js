const { PrismaClient } = require('@prisma/client');
const multer = require('multer')
const prisma = new PrismaClient();
const path = require('path');
const { validationProjet } = require('../../test/validation');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../public/ImageUpload');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
  }
});
const upload = multer({ storage: storage });

const projetController = {

  getProjet: async (req, res) => {
    try {
      const projets = await prisma.Post.findMany({
        include: {
          creator: true,
        },
      });
      res.json(projets);
    } catch (error) {
      console.error('Erreur lors de la récupération des projets :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des projets' });
    }
  },

  getProjetById_creator: async (req, res) => {
    const { id } = req.params;
    try {
      const projet = await prisma.Post.findMany({
        where: {
          id_creator: parseInt(id)
        }
      });
      if (!projet) {
        return res.status(404).json({ message: 'Aucun Projet correspondant as etait trouvé' });
      }
      res.json(projet);
    } catch (error) {
      console.error('Erreur lors de la récupération du projet :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération du projet' });
    }
  },

  getProjetById: async (req, res) => {
    const { id } = req.params;
    try {
      const projet = await prisma.Post.findUnique({
        include: {
          creator: true,
        },
        where: {
          id_post: parseInt(id)
        }
      });
      if (!projet) {
        return res.status(404).json({ message: 'Aucun Projet correspondant as etait trouvé' });
      }
      res.json(projet);
    } catch (error) {
      console.error('Erreur lors de la récupération du projet :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération du projet' });
    }
  },

  postProjet: async (req, res) => {
    upload.single('photo')(req, res, async function (err) {
      console.log('req.id_user', req.id_user);

      if (err) {
        console.error("Erreur de téléchargement de l'image:", err);
        return res.status(500).json({ error: "Erreur de téléchargement de l'image" });
      }
      const imgUpload = '/ImageUpload/' + path.basename(req.file.path);
      const { error, value } = validationProjet.validate({...req.body, id_creator: req.id_user});

      if (error) {
        console.error('Erreur de validation des données:', error);
        return res.status(400).json({ message: 'Données de projet invalides', error: error.details });
      }
      const { title, description, categorie, desired_amount, end_date, id_creator } = value;
      try {
        const projet = await prisma.Post.create({
          data: {
            title,
            description,
            photo: imgUpload,
            categorie,
            desired_amount,
            end_date,
            id_creator,
          }
        });
        res.status(201).json(projet);
      } catch (error) {
        console.error('Erreur lors de la création du projet :', error);
        res.status(500).json({ message: 'Erreur lors de la création du projet' });
      }
    });
  },

  deleteProjet: async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.Post.delete({
        where: {
          id_post: parseInt(id)
        }
      });
      res.json({ message: 'Projet supprimé avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression du projet :', error);
      res.status(500).json({ message: 'Erreur lors de la suppression du projet' });
    }
  }
}


module.exports = { projetController, storage };


