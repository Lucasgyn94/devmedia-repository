const hoje = new Date();

// Imprimindo string com data e hora local
console.log(hoje.toLocaleString());

// imprimindo com a data armazenda
console.log(hoje.toString());

// imprimindo com a data universal
console.log(hoje.toUTCString());

// imprimindo timestamp
console.log(hoje.valueOf());

const data_atual = new Date();
const data_postagem = new Date("2023-09-17T12:00");

// pegando timestamp das datas
const time_atual = data_atual.getTime();
const time_postagem = data_postagem.getTime();

// verifica a diferença em milesegundos
const diferenca = time_atual - time_postagem;

// convertendo em horas
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

// exibindo a diferença
console.log(horas);
