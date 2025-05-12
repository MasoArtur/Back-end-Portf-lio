// const express = require('express');
// const cors = require('cors');

// const app = express();
// const port = 3000; // porta padrao

// app.use(cors());
// app.use(express.json());
 
const bd_cards_formacao_formacao = [
        {
            imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
        },
        {
            imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
        },
        {
            imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
        },
        {
            imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
        },
        {
            imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
        },
        {
            imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
        },
        {
            imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
        },
];

app.get('/formacao', (req, res) =>{
    res.json(bd_cards_formacao_formacao);
});

app.post('/formacao', (req, res) =>{
    try{
        bd_cards_formacao_formacao.push(req.body);
        res.json({resposta: "deu boa"});
    }catch(e){
        console.log(e);
        res.json({resposta: "deu ruim"});
    }
});

app.put('/formacao', (req, res) =>{
    try{
        const {titulo, preco, img} = req.body;
        const index = bd_cards_formacao_formacao.findIndex(p => p.titulo === titulo); //Para cada item p do array, verifique se p.titulo (o titulo do item do array) é igual a nome (a variável vinda do corpo da requisição).
        if(index !== -1){
            bd_cards_formacao_formacao[index] = { titulo, preco, img };
            res.json({resposta: "deu certo"}); //na resposta sempre colocar res.json, pois é a resposta do json
        }else{
            res.status(404).json({respota: "projeto não encontrado"});
        }
    }catch(e){
        console.log(e);
        res.json({resposta: "não deu bom"}); //na resposta sempre colocar res.json, pois é a resposta do json
    }
});

app.delete('/formacao', (res, req) =>{
    try{
        const{titulo} = req.body; //extrai o valor titulo que foi enviado ao json.esse é o nome do item que voce quer deletar
        const index = bd_cards_formacao_formacao.findIndex(p => p.titulo === titulo);

        if(index === -1){
            return res.status(404).json({resposta: "projeto não encontrado"});
        }

        bd_cards_formacao_formacao.splice(index,1); // slice faz uma copia parcial do array, tipo um backup do banco de dados
        res.json({resposta: "deletado com sucesso"})

    }catch(e){
        console.log(e);
        res.status(500).json({resposta: "erro ao deletar"});
    }
});

const Router = express.Router();
Router.get();
Router.post();
Router.put();
Router.delete()

module.exports = Router;
