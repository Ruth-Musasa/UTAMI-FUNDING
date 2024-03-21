const express = require('express');
const CommentController = require('../controllers/CommentController');
const router = express.Router;

router.get('/projet/:idProjet', CommentController.getComment);
router.post('/', CommentController.postComment);
router.delete('/:id', CommentController.deleteComment);

module.exports = router;

