function pega_mes_atual() {
 
    const data_atual = new Date();

    console.log("Get Mês: ", data_atual.getMonth());
    console.log("Get Mês: ", data_atual.getMonth() + 1);

    /*

    0 => Janeiro
    1 => Fevereiro
    2 => Março
    3 => Abril
    4 => Maio
    5 => Junho
    6 => Julho
    7 => Agosto
    8 => Setembro
    9 => Outubro
    10 => Novembro
    11 => Dezembro

    */
}

function getters_dates() {
    
    const data_atual = new Date();

    console.log("Ano: " + data_atual.getFullYear());
    console.log("Mês: " + data_atual.getMonth());
    console.log("Dia: " + data_atual.getDate());
    console.log("Horas: " + data_atual.getHours());
    console.log("Minutos: " + data_atual.getMinutes());
    console.log("Segundos: " + data_atual.getSeconds());
    console.log("Milesegundos: " + data_atual.getMilliseconds());
    console.log("Dia de 0 a 6: " + data_atual.getDay()); // 0



}

function getters_dates_utc() {
    const data_atual = new Date();

    console.log(data_atual.getUTCFullYear());
    console.log(data_atual.getUTCMonth());
    console.log(data_atual.getUTCDate());
    console.log(data_atual.getUTCHours());
    console.log(data_atual.getUTCMinutes());
    console.log(data_atual.getUTCSeconds());
    console.log(data_atual.getUTCMilliseconds());
    console.log(data_atual.getUTCDay());

        /*

    0 => Domingo
    1 => Segunda-feira
    2 => Terça-feira
    3 => Quarta-feira
    4 => Quinta-feira
    5 => Sexta-feira
    6 => Sábado
    */

}

const data_atual = new Date();

console.log(data_atual.getTime()); // qts milessegundos se passaram desde 1970
console.log(data_atual.getTimezoneOffset()); // representa 180 minutos de diferença do fuso horário do computador
console.log(data_atual.valueOf()); // imprimi o valor primitivo do tipo date que é um timestamp;
