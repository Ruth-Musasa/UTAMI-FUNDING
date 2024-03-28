
const { PrismaClient } = require('@prisma/client');
const axios = require('axios');
const prisma = new PrismaClient();

const ContributionController = {
    postContribution: async (req, res) => {
        try {
            const { cardNumber, expiryDate, cvv } = req.body;
            const paymentResponse = await axios.post('https://api.visa.com/payment', {
                cardNumber,
                expiryDate,
                cvv
            });

            console.log('Réponse de l\'API de paiement Visa :', paymentResponse.data);

            const payment = await prisma.payment.create({
                data: {
                    cardNumber,
                    expiryDate,
                    cvv
                }
            });

            res.status(200).json({ message: 'Paiement réussi.', payment });
        } catch (error) {
            console.error('Une erreur s\'est produite lors du traitement du paiement :', error);
            res.status(500).json({ message: 'Une erreur s\'est produite lors du traitement du paiement.' });
        }
    }
}

module.exports=ContributionController

