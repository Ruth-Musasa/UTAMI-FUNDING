const express = require('express');
const CommentController = require('../controllers/CommentController');
const router = express.Router();
const jwt = require('jsonwebtoken');

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

router.get('/projet/:idProjet', CommentController.getComment);
router.post('/', authentication, CommentController.postComment);
router.delete('/:id',authentication, CommentController.deleteComment);

module.exports = router;

