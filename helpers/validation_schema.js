const Joi = require('@hapi/joi');

const userAuthSchema = Joi.object({
    firstName:Joi.string().min(2).message('firstname').required(),
    lastName:Joi.string().min(2).message('lname').required(),
    email:Joi.string().email().lowercase().message('mail').required(),
    phone: Joi.string().min(8).max(12).message('phone').required(),
    city: Joi.string().min(2).message('city').required(),
    state: Joi.string().min(2).message('st').required(),
    country:Joi.string().min(2).message('country').required(),
    zipCode: Joi.number().integer().min(3).message('zip').required()

})
 
module.exports ={
    userAuthSchema 
}