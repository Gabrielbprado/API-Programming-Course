const swaggerAutogen = require('swagger-autogen');

const outputFile = './swagger_output.json'; // Arquivo gerado
const endpointsFiles = ['src/Routes/index.js'];   // Arquivos das rotas

const doc = {
  info: {
    title: 'API Documentation',
    description: 'Documentação gerada automaticamente com swagger-autogen',
  },
  host: 'localhost:3000', // URL base da API
  schemes: ['http'],      // Protocolo usado (http ou https)
};

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
  console.log('Swagger documentation generated!');
});
