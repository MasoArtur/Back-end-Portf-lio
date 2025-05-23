// const express = require('express');
// const cors = require('cors');
// const { route } = require('./cursos');

// const app = express();
// const port = 3000; // porta padrao

// app.use(cors());
// app.use(express.json());

const express = require('express');
const router = express.Router();

let bd_cards_projetos = [
  {
    id: "1",
    titulo: "Smartphone Samsung Galaxy A15 128GB",
    preco: "1.299,00",
    img: "https://app.lojasnossolar.com.br/images/nossolar/produtos/17527/071911_242391_P1000.jpg"
  },
  {
    id: "2",
    titulo: "Notebook Acer Aspire 5 Intel Core i5 8GB RAM",
    preco: "2.799,99",
    img: null
  },
  {
    id: "3",
    titulo: "Fone de Ouvido Bluetooth JBL Tune 510BT",
    preco: "199,90",
    img: null
  },
  {
    id: "4",
    titulo: "Cadeira Gamer ThunderX3 EC3",
    preco: "899,00",
    img: null
  },
  {
    id: "5",
    titulo: "Mouse Logitech G203 RGB",
    preco: "139,90",
    img: null
  },
  {
    id: "6",
    titulo: "Echo Dot 5ª geração com Alexa",
    preco: "379,00",
    img: null
  },
  {
    id: "7",
    titulo: "Smart TV Samsung 50'' 4K Crystal UHD",
    preco: "2.299,00",
    img: null
  },
  {
    id: "8",
    titulo: "Monitor LG UltraWide 29'' Full HD",
    preco: "1.249,00",
    img: null
  },
  {
    id: "9",
    titulo: "Teclado Mecânico Redragon Kumara",
    preco: "229,90",
    img: null
  },
  {
    id: "10",
    titulo: "Caixa de Som JBL Flip 6",
    preco: "599,00",
    img: null
  },
  {
    id: "11",
    titulo: "Smartwatch Xiaomi Redmi Watch 3",
    preco: "479,90",
    img: null
  },
  {
    id: "12",
    titulo: "Impressora Multifuncional Epson EcoTank L3250",
    preco: "1.099,00",
    img: null
  },
  {
    id: "13",
    titulo: "Placa de Vídeo RTX 3060 12GB",
    preco: "2.499,00",
    img: null
  },
  {
    id: "14",
    titulo: "SSD Kingston NV2 1TB M.2 NVMe",
    preco: "349,00",
    img: null
  },
  {
    id: "15",
    titulo: "Câmera Canon EOS Rebel T100 com Lente 18-55mm",
    preco: "2.199,00",
    img: null
  },
  {
    id: "16",
    titulo: "Air Fryer Mondial 4L Preta",
    preco: "369,00",
    img: null
  },
  {
    id: "17",
    titulo: "Liquidificador Arno Power Max 1000",
    preco: "199,90",
    img: null
  },
  {
    id: "18",
    titulo: "Ventilador Mondial Turbo 40cm",
    preco: "179,90",
    img: null
  },
  {
    id: "19",
    titulo: "Máquina de Lavar 11kg Brastemp",
    preco: "2.399,00",
    img: null
  },
  {
    id: "20",
    titulo: "Geladeira Electrolux Frost Free 382L",
    preco: "3.199,00",
    img: null
  },
  {
    id: "21",
    titulo: "Fogão 4 bocas Consul com Acendimento Automático",
    preco: "949,00",
    img: null
  },
  {
    id: "22",
    titulo: "Aspirador de Pó Vertical Electrolux",
    preco: "299,00",
    img: null
  },
  {
    id: "23",
    titulo: "Roteador TP-Link Archer C6 AC1200",
    preco: "189,90",
    img: null
  },
  {
    id: "24",
    titulo: "Kindle 11ª Geração com Iluminação Embutida",
    preco: "499,00",
    img: null
  },
  {
    id: "25",
    titulo: "PlayStation 5 Edição Digital",
    preco: "3.999,00",
    img: null
  }
];

router.get('/', (req, res) =>{
    res.json(bd_cards_projetos);
});

router.post('/', (req, res) =>{
    try{
        bd_cards_projetos.push({
            id: bd_cards_projetos.length + 1,
            titulo: req.body.titulo,
            preco: req.body.preco,
            img: req.body.img,
        });
        res.json({resposta: "deu boa"});
    }catch(e){
        console.log(e);
        res.json({resposta: "deu ruim"});
    }
});

router.put('/', (req, res) =>{
    try{
        const { id ,titulo, preco, img} = req.body;
        const index = bd_cards_projetos.findIndex(p => p.id === id); //Para cada item p do array, verifique se p.titulo (o titulo do item do array) é igual a nome (a variável vinda do corpo da requisição).
        if(index == -1){
            res.status(404).json({respota: "projeto não encontrado"});
        }
        console.log(index);
        bd_cards_projetos[index] = { id: id,titulo: titulo, preco: preco, img: img};
        res.json({resposta: "deu certo"}); //na resposta sempre colocar res.json, pois é a resposta do json
    }catch(e){
        console.log(e);
        res.json({resposta: "não deu bom"}); //na resposta sempre colocar res.json, pois é a resposta do json
    }
});

router.delete('/', (req, res) =>{
    try{
        const{id} = req.body; //extrai o valor titulo que foi enviado ao json.esse é o nome do item que voce quer deletar
        const index = bd_cards_projetos.findIndex(p => p.id === id);

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