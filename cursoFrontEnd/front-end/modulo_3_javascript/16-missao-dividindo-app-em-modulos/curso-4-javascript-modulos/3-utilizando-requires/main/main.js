const dados = require('../dados/dado.js');
const funcao = require('../funcoes/funcao.js');

const data_app = new Date();
const nome_signo = funcao.retorna_signos(dados.colecao_signos, data_app);

console.log(nome_signo);