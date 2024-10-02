const express = require('express');
const app = express();

const calculadoraIMC = require('./calculadoraIMC.js');


app.use(express.json());

let imcs = [];

app.get('/calculadora', (req, res) => {
    
    res.json({imc: imcs});
    
    /*
    let peso = req.query.peso;
    let altura = req.query.altura;

    try {
        let imc = calculadoraIMC.calcularIMC(peso, altura);

        res.json({imc: imc});
    } catch(error) {
        res.status.apply(400).json(error: error.message);
    }
    */
});

app.post('/calculadora', (req, res) => {
    const {peso, altura} = req.body;
    try {
        
        let imc = calculadoraIMC.calcularIMC(peso, altura);
        let status = calculadoraIMC.retornaStatusPeso(imc);
        
        imcs.push(imc);
        
        let json = {imc: imc, status: status};
        res.json(json);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
});


app.listen(8080, () => {
    let data = new Date();
    console.log(`Servidor iniciado com sucesso em: ${data}`)
})