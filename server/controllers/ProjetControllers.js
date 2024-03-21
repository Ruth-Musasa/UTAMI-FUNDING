const express = require('express');
const { PrismaClient } = require('@prisma/client');
const multer = require('multer')
const prisma = new PrismaClient();
const path = require('path')
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
      const projets = await prisma.projet.findMany();
      res.json(projets);
    } catch (error) {
      console.error('Erreur lors de la récupération des projets :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des projets' });
    }
  },

  getProjetById: async (req, res) => {
    const { id } = req.params;
    try {
      const projet = await prisma.projet.findUnique({
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
    const { title, description, image, categorie, desired_amount, end_date, id_creator } = req.body;
    try {
      const projet = await prisma.projet.create({
        data: {
          title,
          description,
          image,
          categorie,
          desired_amount,
          end_date,
          id_creator
        }
      });
      res.status(201).json(projet);
    } catch (error) {
      console.error('Erreur lors de la création du projet :', error);
      res.status(500).json({ message: 'Erreur lors de la création du projet' });
    }
  }


}

module.exports = { projetController, storage };


