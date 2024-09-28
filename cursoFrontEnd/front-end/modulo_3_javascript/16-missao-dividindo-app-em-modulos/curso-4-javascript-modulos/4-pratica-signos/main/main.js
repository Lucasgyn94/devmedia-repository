import colecao_signos from '../dados/dados.js';
import retorna_signos from '../funcoes/funcoes.js'

let data_app = new Date();
let nome_signo = retorna_signos(colecao_signos, data_app);
console.log(nome_signo);