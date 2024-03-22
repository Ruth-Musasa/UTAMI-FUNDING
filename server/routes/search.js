const express = require('express');
const SearchController = require('../controllers/SearchController');
const router = express.Router();

router.get('/projets', SearchController.getSearchPost);
router.get('/users', SearchController.getSearchUsers);

module.exports = router;
