const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000; // porta padrao

app.use(cors());
app.use(express.json());

const projetos = require('./routers/projetos')
const formacao = require('./routers/formacao');
const cursos = require('./routers/cursos');

app.use('/projetos', projetos);
app.use('/formacao', formacao);
app.use('/cursos', cursos);

// app.post('/login', (req, res) =>{

// } )

app.listen(port, () =>{
    console.log(`seu bla bla é: ${port}`);
});