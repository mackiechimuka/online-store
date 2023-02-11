const createError = require('http-errors');

const User = require('../models/user');
const {userAuthSchema} = require('../../helpers/validation_schema');
const { ObjectId } = require('mongodb');
const { default: mongoose } = require('mongoose');
const { result } = require('@hapi/joi/lib/base');

function returnError(res, error) {
    res.status(500).json({
      message: 'An error occurred',
      error: error
    });
  }

const getAll = async (req,res,next)=>{
    try {
        const results = await User.find()
        .then((users)=>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(
            {
                message:"Users successfully fetched",
                users: users
            }
        )
        }
        )
   
        
    } catch (error) {
        next(error);
    }
    
}

const addUser =  async (req,res,next)=>{
    try {
        const validUser = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            city:req.body.city,
            state:req.body.state,
            city:req.body.city,
            state:req.body.state,
            country:req.body.country,
            zipCode:req.body.zipCode
            }
        const result = await userAuthSchema.validateAsync(validUser);
        const user = new User(result);


        createdUser = await user.save();
        console.log(createdUser.acknowledged)
        res.status(201).json({
                message:'User added Succesfully',
                user:createdUser
                }
                )
        
    } catch (error) {
        if(error.isJoi ==true){
            error.status =422;
        }
        console.log(error);
        next(error);
    }
   
    
}

const updateUser = async (req,res,next)=>{
    try {
        const userId = req.params.id;
        const user = await User.findOne({_id:userId});
        console.log(user)
        if (user == null ){
            throw createError(404,"User not found")
        }else{
            const validUser = {
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                city:req.body.city,
                state:req.body.state,
                city:req.body.city,
                state:req.body.state,
                country:req.body.country,
                zipCode:req.body.zipCode
                }
            const result = await userAuthSchema.validateAsync(validUser);
            const userUpdated  = await User.updateOne({_id:userId},result);
            if(!userUpdated.acknowledged){
                throw createError(304,userUpdated.err ||"User is not modified");
            }else{
                res.status(200).json({
                    message:"User sucessfully updated"
                })
            }
        }
    } catch (error) {
        if(error.isJoi == true){
            error.status = 422;
        }

        else if (error instanceof mongoose.CastError){
            next(createError(400, "Invalid User Id"));
            return;
        }
        next(error);
    }
}

const deleteUser = async (req,res,next)=>{
    try {
        const userId = req.params.id;
        const getItem = await User.findByIdAndDelete({_id:userId});
        if(getItem.$isDeleted){
            console.log('User succesfully deleted');
            console.log(getItem);
            res.status(204).json({
                message:"User succesfully deleted"
            });
        }else{
            throw createError(404,"User with specified doesn't exist")

        }
            
            
    
    } catch (error) {
        if (error instanceof mongoose.CastError){
            next(createError(400,'Invalid User Id'));
            return;
        }
        next(error)
        
    }
}

module.exports ={getAll,addUser,updateUser,deleteUser};