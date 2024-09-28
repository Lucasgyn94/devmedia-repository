import verifica_serie_de_hoje from "../retornoSerie/retorna_serie_dia.js";

// camada de exibição de série
let data = new Date();
let dia_semana = data.getDay();

let serie_de_hoje = verifica_serie_de_hoje(dia_semana);
console.log("Série de hoje: " + serie_de_hoje);