const dotenv = require('dotenv');
dotenv.config();

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple Node Auth Boilerplate Project',
      version: '1.0.0',
      description:
        'A simple authentication project built using Express and JWT ',
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/'
      },
      contact: {
        name: 'Onasanya Babatunde',
        url: 'https://onasanyatunde.codes',
        email: 'onasanyatunde67@gmail.com'
      }
    },
    servers: [
      {
        url: process.env.BASE_URL
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./docs/schema.js', './docs/paths.js']
};

module.exports = options;
