const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info:{
        title:'Online Api',
        description: 'OnlineApi'
    },
    host:'https://localhost:8080/users',
    schemes:['http'],
};

const output = './swagger.json';
const endpoint =['./src/routes/index']

swaggerAutogen(output,endpoint,doc);