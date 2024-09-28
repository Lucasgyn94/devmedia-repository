import verifica_dia_semana from "../retornoDia/retorno_dia_serie.js";
// camada de serviço de serie
let serie = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];

const verifica_serie_de_hoje = (dia) => {
    return serie[dia];
}

const verifica_dia_serie = () => {
    let dia = verifica_dia_semana();
    let serie = verifica_serie_de_hoje(dia);

    return serie;
}

export default verifica_dia_serie;