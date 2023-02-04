const express = require('express');
const app = express();
const bodyPasser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.Port || 8080


app
.use(
    bodyPasser.json()
)
.use(bodyPasser.urlencoded({
    extended: false
  }))
.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
})
.use('/',require('./routes'))

mongoose.connect(process.env.MONGODB_URI,
   { useNewUrlParser: true }, (err, res) => {
      if (err) {
         console.log('Connection failed: ' + err);
         
      }else{
         console.log('Connected to database!');
         
         
      }
      }
);
app.listen(port,()=>{
   console.log(`Running on localhost:${port}`)
})

