const express = require('express');
const contributionController = require('../controllers/ContributionController.js');
const router = express.Router();

router.post('/payment', contributionController.postContribution);
router.get('/payment/:idProjet', contributionController.getContribution);

module.exports = router;
