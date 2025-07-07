const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'API documentation using Swagger in Express.js',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // route files jahan Swagger comments likhe hain
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
