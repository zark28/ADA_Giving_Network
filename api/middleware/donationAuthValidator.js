const Joi = require('joi');

const createDonationValidator = Joi.object({
  solicitorOrganisation: Joi.string().required(),
  amount: Joi.number().required(),
  description: Joi.string().required(),
  title: Joi.string().required().min(5)
});



module.exports =  createDonationValidator;
