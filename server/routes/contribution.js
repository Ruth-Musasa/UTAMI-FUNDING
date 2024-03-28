const express = require('express');
const contributionController = require('../controllers/ContributionController.js');
const router = express.Router();

router.post('/api/payment', contributionController.postContribution);

module.exports = router;
