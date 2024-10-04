const express = require('express');
const cors = require('cors');

const app = express();

const fatosHistoricosService = require('./services/fatosHistoricosService.js');


app.use(express.json()); 
app.use(cors());

app.get('/fatos', (req, res) => {
    const anoFato = req.query.ano; 
    if (!anoFato) {
        return res.status(400).json({ error: 'Ano não fornecido' });
    }    

    if (!fatosHistoricosService.validaAno(anoFato)) {
        return res.status(400).json({ error: 'Ano inválido' });
    }

    const fato = fatosHistoricosService.buscarFatoPorAno(anoFato);
    
    if (fato) {
        res.json({ anoFato, fato });
    } else {
        res.status(404).json({ error: 'Fato não encontrado para o ano fornecido' });
    }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
