const joi = require('joi');

const solicitorSignupValidator = joi.object({
  organizatioName: joi.string().required(),
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  cause: joi.string().required(),
  description: joi.string().required(),
  phoneNumber: joi.string().required(),
  size: joi.string().required(),
  role: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(5),
});

const solicitorSigninValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(5),
});

module.exports = {
  solicitorSignupValidator,
  solicitorSigninValidator,
};
