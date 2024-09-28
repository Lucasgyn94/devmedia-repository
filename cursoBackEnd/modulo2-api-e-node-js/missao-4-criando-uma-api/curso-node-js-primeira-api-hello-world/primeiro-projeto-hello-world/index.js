const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    let mensagem = 'Ola mundo';
    res.send({"mensagem": mensagem});
});

app.listen(port, () => {
    let data = new Date();
    console.log(`Servidor rodando em http://localhost:${port} - Data: ${data.toLocaleString()}`);
});