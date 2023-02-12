const Joi = require('@hapi/joi');

const userAuthSchema = Joi.object({
    firstName:Joi.string().min(2).message('firstname must have at least minimum of 2 words').required(),
    lastName:Joi.string().min(2).message('lastname must have minimum of 2 letters').required(),
    email:Joi.string().email().lowercase().message('Incorect email format').required(),
    phone: Joi.string().min(8).max(12).message('phone must have minimum of 8 numbers').required(),
    city: Joi.string().min(2).message('city must have minimum of 2 characters').required(),
    state: Joi.string().min(2).message('state must have minimum of 2 characters').required(),
    country:Joi.string().min(2).message('country must have minimum of 2 characters').required(),
    zipCode: Joi.number().integer().min(3).message('zip code must be numbers with minimum of 3').required()

})
 
module.exports ={
    userAuthSchema 
}