const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000; // porta padrao

app.use(cors());
app.use(express.json());

const projetos = require('./projetos')
const formacao = require('./formacao');
const cursos = require('./cursos');

app.use('/projetos', projetos);
app.use('/formacao', formacao);
app.use('/cursos', cursos);

app.listen(port, () =>{
    console.log(`seu bla bla é: ${port}`);
});