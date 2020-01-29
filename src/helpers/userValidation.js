import Joi from '@hapi/joi'

const domesticWorkersSchema = Joi.object().keys({
  id: Joi.number()
    .min(3)
    .max(30),
  firstName: Joi.string()
    .min(3)
    .max(30)
    .required(),
  lastName: Joi.string()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .alphanum()
    .min(3)
    .max(30),
  phoneNumber: Joi.string()
    .alphanum()
    .max(30)
    .required(),
  nid: Joi.number()
    .required(),
  status: Joi.string()
    .max(100),
  type: Joi.string()
    .min(3)
    .max(100)
    .required(),
  description: Joi.string()
    .min(3)
    .max(500),
  profile: Joi.string()
    .min(3)
    .max(500),
  createdAt: Joi.date()
    .min(3)
    .max(500),
  updatedAt: Joi.date()
    .min(3)
    .max(500),
})

export default domesticWorkersSchema
