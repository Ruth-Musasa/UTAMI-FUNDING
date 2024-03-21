const { PrismaClient } = require('@prisma/client');
const multer = require('multer')
const prisma = new PrismaClient();
const path = require('path');
const {validationProjet} = require('../../test/validation');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/home/user-3-c2/Documents/Chef_Doeuvre/server/controllers/ImageUpload');
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
      const projets = await prisma.Post.findMany();
      res.json(projets);
    } catch (error) {
      console.error('Erreur lors de la récupération des projets :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des projets' });
    }
  },

  getProjetById: async (req, res) => {
    const { id } = req.params;
    try {
      const projet = await prisma.Post.findUnique({
        where: {
          id_projet: parseInt(id)
        }
      });
      if (!projet) {
        return res.status(404).json({ message: 'Projet non trouvé' });
      }
      res.json(projet);
    } catch (error) {
      console.error('Erreur lors de la récupération du projet :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération du projet' });
    }
  },

  postProjet: async (req, res) => {
    upload.single('photo')(req, res, async function (err) {
      if (err) {
        console.error("Erreur de téléchargement de l'image:", err);
        return res.status(500).json({ error: "Erreur de téléchargement de l'image" });
      }
      const imgUpload = 'http://localhost:5000/' + path.basename(req.file.path);
      const { error, value } = validationProjet.validate(req.body);
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
          id_projet: parseInt(id)
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

