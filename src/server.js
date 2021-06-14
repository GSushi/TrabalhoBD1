const express = require('express');
const routes = require('./routes');

const PORT = 3333;

const app = express();
app.use(express.json());


app.listen(PORT, () => console.log(`Lintening on ${PORT}`));
