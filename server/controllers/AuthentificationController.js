// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const { PrismaClient } = require('@prisma/client');
// const multer = require('multer')
// const prisma = new PrismaClient();
// const users = prisma.User;
// const path = require('path');
// const { signupUser, loginUser } = require('../../test/validation');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '/home/user-3-c2/Documents/Chef_Doeuvre/server/controllers/ImageUpload');
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
//     }
// });
// const upload = multer({ storage: storage });

// const userController = {
//     getUser: async (req, res, next) => {
//         const token = req.params?.id;
//         if (!token) {
//             return res.status(401).json({ error: 'Aucun idenetifiant trouvé' });
//         }
//         try {
//             const decoded = jwt.verify(token, 'code Secret');
//             console.log(decoded);
//             const user = await prisma.User.findUnique({
//                 where: {
//                     id_user: decoded.id
//                 }
//             });
//             if (!user) {
//                 throw new Error();
//             }
//             req.user = user;
//             next();
//         } catch (error) {
//             console.log(error);
//             return res.status(401).json({ error});
//         }
//     },
//     allUsers: async (req, res) => {
//         const all = await prisma.User.findMany({
//             include: {
//                 Post: true,
//                 Contribution: true,
//             },
//         })
//         console.dir(all, { depth: null })
//         res.json(all);
//     },
//     postUseSignin: async (req, res) => {
//         upload.single('photo')(req, res, async function (err) {
//             if (err) {
//                 console.error("Erreur de téléchargement de l'image:", err);
//                 return res.status(500).json({ error: "Erreur de téléchargement de l'image" });
//             }

//             const { error: signupError, value } = signupUser.validate(req.body);
//             if (signupError) {
//                 console.error("Erreur de validation des données d'inscription:", signupError);
//                 return res.status(400).json({ error: "Erreur de validation des données d'inscription", details: signupError.details });
//             }

//             const { name_user, name, password, email } = value;
//             const imgUpload = 'http://localhost:5000/' + path.basename(req.file.path);
//             const hashedPassword = await bcrypt.hash(password, 10);
//             try {
//                 await prisma.User.create({
//                     data: {
//                         name_user,
//                         photo: imgUpload,
//                         email,
//                         name,
//                         password: hashedPassword,
//                     },
//                 });
//                 res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
//             } catch (error) {
//                 console.error("Erreur d'enregistrement:", error);
//                 res.status(500).json({ error: "Erreur d'enregistrement" });
//             }
//         });
//     },

//     postUseLogin: async (req, res) => {
//         const { error: loginError , value } = loginUser.validate(req.body);
//         if (loginError) {
//             console.error("Erreur de validation des données de connexion:", loginError);
//             return res.status(400).json({ error: "Erreur de validation des données de connexion", details: loginError.details });
//         }
//         const { email, password } = value;
//         try {
//             const user = await prisma.User.findUnique({
//                 where: {
//                     email,
//                 }
//             });
//             if (!user) {
//                 return res.status(401).json({ error: 'Données invalides' });
//             }
//             const validPassword = await bcrypt.compare(password, user.password);
//             if (!validPassword) {
//                 return res.status(401).json({ error: 'Données invalides' });
//             }
//             const token = jwt.sign(
//                 { id: user.id_user },
//                 'code Secret',
//                 { expiresIn: '24h' }
//             );
//             res.status(200).json({ token, id: user.id_user });
//         } catch (error) {
//             console.error("Erreur d'authentification:", error);
//             res.status(500).json({ error: "Erreur d'authentification" });
//         }
//     },

// //     deleteUserId: async (req, res) => {
//     const id = parseInt(req.params.id);
//     try {
//         await prisma.user.delete({
//             where: {
//                 id: id,
//             },
//         });
//         res.status(201).json({ message: 'Utilisateur supprimé avec succès' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur" });
//     }
// },
// }

// module.exports = { userController, storage };



const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const multer = require('multer')
const prisma = new PrismaClient();
const users = prisma.User;
const path = require('path');
const { signupUser, loginUser } = require('../../test/validation');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/home/user-3-c2/Documents/Chef_Doeuvre/server/controllers/ImageUpload');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
    }
});
const upload = multer({ storage: storage });

const jwtSecret = "Secret123!Key456?";

const userController = {
    getUser: async (req, res, next) => {
        const token = req.params?.id;
        if (!token) {
            return res.status(401).json({ error: 'Aucun identifiant trouvé' });
        }
        try {
            const decoded = jwt.verify(token, jwtSecret);
            console.log(decoded);
            const user = await prisma.User.findUnique({
                where: {
                    id_user: decoded.id
                }
            });
            if (!user) {
                throw new Error();
            }
            req.user = user;
            next();
        } catch (error) {
            console.log(error);
            return res.status(401).json({ error });
        }
    },
    allUsers: async (req, res) => {
        const all = await prisma.User.findMany({
            include: {
                Post: true,
                Contribution: true,
            },
        })
        console.dir(all, { depth: null })
        res.json(all);
    },
    postUseSignin: async (req, res) => {
        upload.single('photo')(req, res, async function (err) {
            if (err) {
                console.error("Erreur de téléchargement de l'image:", err);
                return res.status(500).json({ error: "Erreur de téléchargement de l'image" });
            }

            const { error: signupError, value } = signupUser.validate(req.body);
            if (signupError) {
                console.error("Erreur de validation des données d'inscription:", signupError);
                return res.status(400).json({ error: "Erreur de validation des données d'inscription", details: signupError.details });
            }

            const { name_user, name, password, email } = value;
            const imgUpload = 'http://localhost:5000/' + path.basename(req.file.path);
            const hashedPassword = await bcrypt.hash(password, 10);
            try {
                await prisma.User.create({
                    data: {
                        name_user,
                        photo: imgUpload,
                        email,
                        name,
                        password: hashedPassword,
                    },
                });
                res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
            } catch (error) {
                console.error("Erreur d'enregistrement:", error);
                res.status(500).json({ error: "Erreur d'enregistrement" });
            }
        });
    },

    postUseLogin: async (req, res) => {
        const { error: loginError , value } = loginUser.validate(req.body);
        if (loginError) {
            console.error("Erreur de validation des données de connexion:", loginError);
            return res.status(400).json({ error: "Erreur de validation des données de connexion", details: loginError.details });
        }
        const { email, password } = value;
        try {
            const user = await prisma.User.findUnique({
                where: {
                    email,
                }
            });
            if (!user) {
                return res.status(401).json({ error: 'Données invalides' });
            }
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(401).json({ error: 'Données invalides' });
            }
            const token = jwt.sign(
                { id: user.id_user },
                jwtSecret,
                { expiresIn: '24h' }
            );

            user.password = null;

            res.status(200).json({ token, user });
        } catch (error) {
            console.error("Erreur d'authentification:", error);
            res.status(500).json({ error: "Erreur d'authentification" });
        }
    },

    deleteUserId: async (req, res) => {
        const id = parseInt(req.params.id);
        try {
            await prisma.user.delete({
                where: {
                    id: id,
                },
            });
            res.status(201).json({ message: 'Utilisateur supprimé avec succès' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur" });
        }
    },
}

module.exports = { userController, storage };
