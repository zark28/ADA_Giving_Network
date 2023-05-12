const Joi = require('joi');

const donorSignupValidator = Joi.object({
  organizatioName: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  cause: Joi.string().required(),
  description: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  size: Joi.string().required(),
  role: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5)
});


const donorSigninValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5)
});

module.exports = {
  donorSignupValidator,
  donorSigninValidator,
};
