const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const { userController } = require('../controllers/AuthentificationController');
const prisma = new PrismaClient();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Page d'accueil de API UTAMI" });
});

router.get('/use',  userController.allUsers);


module.exports = router;
