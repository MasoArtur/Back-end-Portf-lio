// const express = require('express');
// const cors = require('cors');
// const { route } = require('./cursos');

// const app = express();
// const port = 3000; // porta padrao

// app.use(cors());
// app.use(express.json());

const express = require('express');
const router = express.Router();

const bd_cards_projetos = [
    { titulo: "Smartphone Samsung Galaxy A15 128GB", preco: "1.299,00", img: "https:app.lojasnossolar.com.br/images/nossolar/produtos/17527/071911_242391_P1000.jpg"},
    { titulo: "Notebook Acer Aspire 5 Intel Core i5 8GB RAM", preco: "2.799,99" },
    { titulo: "Fone de Ouvido Bluetooth JBL Tune 510BT", preco: "199,90" },
    { titulo: "Cadeira Gamer ThunderX3 EC3", preco: "899,00" },
    { titulo: "Mouse Logitech G203 RGB", preco: "139,90" },
    { titulo: "Echo Dot 5ª geração com Alexa", preco: "379,00" },
    { titulo: "Smart TV Samsung 50'' 4K Crystal UHD", preco: "2.299,00" },
    { titulo: "Monitor LG UltraWide 29'' Full HD", preco: "1.249,00" },
    { titulo: "Teclado Mecânico Redragon Kumara", preco: "229,90" },
    { titulo: "Caixa de Som JBL Flip 6", preco: "599,00" },
    { titulo: "Smartwatch Xiaomi Redmi Watch 3", preco: "479,90" },
    { titulo: "Impressora Multifuncional Epson EcoTank L3250", preco: "1.099,00" },
    { titulo: "Placa de Vídeo RTX 3060 12GB", preco: "2.499,00" },
    { titulo: "SSD Kingston NV2 1TB M.2 NVMe", preco: "349,00" },
    { titulo: "Câmera Canon EOS Rebel T100 com Lente 18-55mm", preco: "2.199,00" },
    { titulo: "Air Fryer Mondial 4L Preta", preco: "369,00" },
    { titulo: "Liquidificador Arno Power Max 1000", preco: "199,90" },
    { titulo: "Ventilador Mondial Turbo 40cm", preco: "179,90" },
    { titulo: "Máquina de Lavar 11kg Brastemp", preco: "2.399,00" },
    { titulo: "Geladeira Electrolux Frost Free 382L", preco: "3.199,00" },
    { titulo: "Fogão 4 bocas Consul com Acendimento Automático", preco: "949,00" },
    { titulo: "Aspirador de Pó Vertical Electrolux", preco: "299,00" },
    { titulo: "Roteador TP-Link Archer C6 AC1200", preco: "189,90" },
    { titulo: "Kindle 11ª Geração com Iluminação Embutida", preco: "499,00" },
    { titulo: "PlayStation 5 Edição Digital", preco: "3.999,00" }
];

router.get('/', (req, res) =>{
    res.json(bd_cards_projetos);
});

router.post('/', (req, res) =>{
    try{
        bd_cards_projetos.push(req.body);
        res.json({resposta: "deu boa"});
    }catch(e){
        console.log(e);
        res.json({resposta: "deu ruim"});
    }
});

router.put('/', (req, res) =>{
    try{
        const {titulo, preco, img} = req.body;
        const index = bd_cards_projetos.findIndex(p => p.titulo === titulo); //Para cada item p do array, verifique se p.titulo (o titulo do item do array) é igual a nome (a variável vinda do corpo da requisição).
        if(index !== -1){
            bd_cards_projetos[index] = { titulo, preco, img };
            res.json({resposta: "deu certo"}); //na resposta sempre colocar res.json, pois é a resposta do json
        }else{
            res.status(404).json({respota: "projeto não encontrado"});
        }
    }catch(e){
        console.log(e);
        res.json({resposta: "não deu bom"}); //na resposta sempre colocar res.json, pois é a resposta do json
    }
});

router.delete('/', (req, res) =>{
    try{
        const{titulo} = req.body; //extrai o valor titulo que foi enviado ao json.esse é o nome do item que voce quer deletar
        const index = bd_cards_projetos.findIndex(p => p.titulo === titulo);

        if(index === -1){
            return res.status(404).json({resposta: "projeto não encontrado"});
        }

        bd_cards_projetos.splice(index, 1); // slice faz uma copia parcial do array, tipo um backup do banco de dados
        res.json({resposta: "deletado com sucesso"})

    }catch(e){
        console.log(e);
        res.status(500).json({resposta: "erro ao deletar"});
    }
});

module.exports = router;