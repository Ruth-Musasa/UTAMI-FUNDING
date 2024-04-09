const express = require('express');
const router = express.Router();

router.get('/users', function (req, res, next) {
    res.render('index', { title: "Page users de API UTAMI" });
  });
  
const { userController, storage } = require('server/controllers/AuthentificationController.js');
router.post('/signin', userController.postUseSignin);
router.post('/login', userController.postUseLogin);
router.delete('/:id', userController.deleteUserId);
router.get('/:id', userController.getUser, (req, res) => {
    res.json({ message: 'Acces protegé', user: req.user });
});
router.get('/', userController.allUsers);
module.exports = router;

