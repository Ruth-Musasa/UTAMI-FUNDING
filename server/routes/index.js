const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Page d'accueil de API UTAMI" });
});

router.get('/use', function (req, res, next) {
  res.render('index', { title: "Page users de API UTAMI" });
});


module.exports = router;
