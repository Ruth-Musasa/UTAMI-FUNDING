const express = require('express');
const router = express.Router();

const { projetController, storage } = require("server/controllers/ProjetControllers.js");

router.get('/', projetController.getProjet);
router.get('/:id',projetController.getProjetById);
router.post('/', projetController.postProjet);

module.exports = router;

