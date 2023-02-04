const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info:{
        title:'My Contact Api',
        description: 'My contact api'
    },
    host:'https://localhost8080/users',
    schemes:['http'],
};

const output = './swagger.json';
const endpoint =['./src/routes/index']

swaggerAutogen(output,endpoint,doc);