const app = require('./src/app.js');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

const PORT = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Inicia o servidor

app.get('/teste', (req, res) => {
  res.status(200).send({ mensagem: 'boas-vindas à API' });
}
);
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
  console.log('Swagger Docs at http://localhost:3000/api-docs');
});


