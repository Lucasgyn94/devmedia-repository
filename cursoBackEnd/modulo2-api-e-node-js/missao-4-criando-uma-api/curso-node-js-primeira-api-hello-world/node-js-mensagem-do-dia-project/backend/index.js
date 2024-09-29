const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');

let data = new Date();
let mensagemDoDia = require('./mensagemDoDia');

app.use(cors());

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia);

    res.json(
        {
            dia: dia, 
            mensagem: mensagemSelecionada});
        }
    );

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT} em ${data}`);
});