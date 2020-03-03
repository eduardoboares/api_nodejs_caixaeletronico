const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./src/app/controllers/index')(app);

console.log("Escutando na porta:", process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.send('API NodeJS de caixa eletrônico em execução!');
  });

app.listen(process.env.PORT || 3000);