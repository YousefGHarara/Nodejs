const Joi = require("@hapi/joi")

const schema = Joi.object({
  // first>[type] | last>[required]
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().message("alphanum isn't a valid !!").min(4).message("error ! less than 4").max(10).required(),
  password: Joi.string()
  .pattern(new RegExp("")).message("error in pattern !")
  .required()
})

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})

module.exports = {
  schema,loginSchema
}