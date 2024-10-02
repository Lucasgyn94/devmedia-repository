const express = require('express');
const app = express();
const cors = require('cors');

const conversorDeTemperatura = require('./conversorDeTemperatura.js');
const PORT = 8080;

app.use(express.json());
app.use(cors());

let temperaturas = [];

app.get('/conversorDeTemperatura', (req, res) => {
    res.json({ temperaturas: temperaturas });
});

app.post('/conversorDeTemperatura', (req, res) => {
    const { grauTemperatura, tipoTemperatura } = req.body;

    if (grauTemperatura === undefined || tipoTemperatura === undefined) {
        return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const temperaturaConvertida = conversorDeTemperatura.converterTemperatura(grauTemperatura, tipoTemperatura);
    temperaturas.push(temperaturaConvertida);
    res.json({ temperatura: temperaturaConvertida });
});

app.listen(PORT, () => {
    let data = new Date();
    console.log(`Servidor iniciado com sucesso em: ${data}`);
});
