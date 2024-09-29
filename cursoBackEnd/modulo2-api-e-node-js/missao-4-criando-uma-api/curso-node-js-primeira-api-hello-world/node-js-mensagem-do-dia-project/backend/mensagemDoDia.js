const mensagem = require('./dados');

const retornarMensagemDoDia = (dia) => {
    return mensagem.frases[dia - 1];
}

exports.retornarMensagemDoDia = retornarMensagemDoDia;
