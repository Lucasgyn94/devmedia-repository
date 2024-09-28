const data_ultimo_acesso = new Date("2023/08/05");
const data_atual = new Date();

const hora = data_atual.getHours();

const time_ultimo_acesso = data_ultimo_acesso.getTime();
const time_atual = data_atual.getTime();

const diferencia_time = time_atual - time_ultimo_acesso;

const milesegundosHora = 1000 * 60 * 60;
const milesegundosDia = milesegundosHora * 24;

data_atual.getye
let msg = "";

if (hora < 6 || hora >= 18) {
    msg = "Boa noite"
} else if (hora >= 6 && hora < 12) {
    msg = "Bom dia";
} else {
    msg = "Boa tarde";
}

if (diferencia_time > milesegundosDia) {
    msg += "\nVocê está ausente há dias!!"
} else if (diferencia_time > milesegundosHora) {
    msg += "\nVocê está ausente há horas!!"
} else {
    msg += "\nQue bom que ainda está aqui!!"
}

console.log(msg)