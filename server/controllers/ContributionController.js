
const { PrismaClient } = require('@prisma/client');
const axios = require('axios');
const { contributionProjet } = require('../../test/validation');
const prisma = new PrismaClient();

const ContributionController = {
    getContribution: async (req, res) => {
        const { idProjet } = req.params;
        console.log(idProjet);
        try {
            const commentaires = await prisma.Contribution.findMany({
                include: {
                    contributeur: true,
                },
                where: {
                    id_post: parseInt(idProjet)
                },
            });
            res.json(commentaires);
        } catch (error) {
            console.error('Erreur lors de la récupération des commentaires :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des commentaires' });
        }
    },
    postContribution: async (req, res) => {
        try {
            const { error, value } = contributionProjet.validate({ ...req.body,  id_contributeur: req.id_user });
            const { id_post,  id_contributeur, amount } = value;
            const payment = await prisma.Contribution.create({
               
                data: {
                    amount,
                    id_contributeur,
                    id_post,
                }
            });

            res.status(200).json({ message: 'Paiement réussi.', payment });
        } catch (error) {
            console.error('Une erreur s\'est produite lors du traitement du paiement :', error);
            res.status(500).json({ message: 'Une erreur s\'est produite lors du traitement du paiement.' });
        }
    }
}

module.exports = ContributionController

