const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info:{
        title:'Online Api',
        description: 'OnlineApi'
    },
    host:'localhost:8080',
    schemes:['http'],
};

const output = './swagger.json';
const endpoint =['./src/routes/index']

swaggerAutogen(output,endpoint,doc);