const express = require('express');
const app = express();
const bodyPasser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


app
.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
.use(
    bodyPasser.json()
)
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

const port = process.env.Port || 8080 
app.listen(port,()=>{
   console.log(`Running on localhost:${port}`)
})

