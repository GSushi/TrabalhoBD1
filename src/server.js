const express = require('express');

const PORT = 3333;

const app = express();
app.use(express.json());


app.listen(PORT, () => console.log(`Lintening on ${PORT}`));
