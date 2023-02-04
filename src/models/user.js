const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let schema = new Schema(
    {
        firstName:{type:String,required:true},
        lastName: {type: String, required:true},
        email: {type:String, required:true},
        phone:{type:String,required:true},
        city:{type:String,required:true},
        state:{type:String,required:true},
        country:{type:String,required:true},
        zipCode:{type:Number,required:true}

    }
)

module.exports = mongoose.model('User',schema);