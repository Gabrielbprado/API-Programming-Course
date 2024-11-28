const express = require('express');
const route = require('./Routes/index.js');

const app = express();
route(app);
app.get('/teste', (req, res) => {
  res.status(200).send({ mensagem: 'boas-vindas à API' });
});
module.exports = app;
