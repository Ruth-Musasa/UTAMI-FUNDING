const express = require('express');
const router = express.Router();

const { projetController, storage } = require("server/controllers/ProjetControllers.js");

router.get('/', projetController.getProjet);
router.get('/:id',projetController.getProjetById_creator);
router.get('/detail/:id',projetController.getProjetById);
router.post('/', projetController.postProjet);
router.delete('/:id', projetController.deleteProjet);

module.exports = router;

