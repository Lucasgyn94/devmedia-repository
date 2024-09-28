const express = require('express');
const app = express();
const PORT = 8080;

let data = new Date();
let mensagemDoDia = require('./mensagemDoDia');



app.get('/', (req, res) => {
    let dia = data.getDate();
    console.log(dia);
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