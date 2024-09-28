// camada de serviço de serie
let serie = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];

const verifica_serie_de_hoje = (posicao_serie) => {
    return serie[posicao_serie];
}

// camada de exibição de série
let data = new Date();
let dia_semana = data.getDay();

let serie_de_hoje = verifica_serie_de_hoje(dia_semana);
console.log("Série de hoje: " + serie_de_hoje);