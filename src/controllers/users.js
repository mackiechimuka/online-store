const User = require('../models/user');

function returnError(res, error) {
    res.status(500).json({
      message: 'An error occurred',
      error: error
    });
  }

const getAll = (req,res,next)=>{
    User.find()
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
    .catch((error=>{
        returnError(res,error);
    }));
}

const addUser = (req,res,next)=>{
    const user = new User({
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone:req.body.phone,
        city: req.body.city,
        state: req.body.state,
        country:req.body.country,
        zipCode: req.body.zipCode

    })
    user.save()
    .then((createdUser)=>{
        res.status(201).json({
            message:'User added Succesfully',
            user:createdUser
        }
        )
    })
    .catch((error)=>{
        returnError(res,error);
    });
}

module.exports ={getAll,addUser};