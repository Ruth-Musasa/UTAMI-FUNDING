const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { projetController, storage } = require("server/controllers/ProjetControllers.js");

const authentication = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Token manquant" });
    }
    try {
        const decoded = jwt.verify(token.split(' ')[1], "Secret123!Key456?");
        req['id_user'] = decoded.id;
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({ error });
    }
};

router.get('/', projetController.getProjet);
router.get('/:id', projetController.getProjetById_creator);
router.get('/detail/:id',  projetController.getProjetById);
router.post('/', authentication, projetController.postProjet);
router.delete('/:id', authentication, projetController.deleteProjet);

module.exports = router;

