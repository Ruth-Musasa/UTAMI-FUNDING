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
  password: Joi.string().min(4).required(),
});

const loginUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
});

const commentProjet = Joi.object({
  id_post: Joi.number().integer().required(),
  id_creator: Joi.number().integer().required(),
  contenu: Joi.string().required().min(1)
});

const contributionProjet = Joi.object({
  id_post: Joi.number().integer().required(),
  id_contributeur: Joi.number().integer().required(),
  amount: Joi.string().required().min(1)
}); 
const searchPosts = Joi.object({
  q: Joi.string().min(1).required() 
});

const searchUsers = Joi.object({
  q: Joi.string().min(1).required() 
});

module.exports = { validationProjet, signupUser, loginUser, commentProjet, searchPosts,  searchUsers, contributionProjet  }