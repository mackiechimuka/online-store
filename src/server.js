const express = require('express');
const app = express();
const bodyPasser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.Port || 8080

app
.use(
    bodyPasser.json()
)
.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
})
//.use('/',require(''))
app.listen(port,()=>{
    console.log(`Running on localhost:${port}`)
})