const Joi = require('joi');

const validationProjet = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  categorie: Joi.string(),
  desired_amount: Joi.number().required(),
  end_date: Joi.date().required(),
  id_creator: Joi.number().required()
});

const signupUser = Joi.object({
  name_user: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const commentProjet = Joi.object({
  id_post: Joi.number().integer().required(),
  id_creator: Joi.number().integer().required(),
  contenu: Joi.string().required().min(1)
});

module.exports = { validationProjet, signupUser, loginUser, commentProjet }