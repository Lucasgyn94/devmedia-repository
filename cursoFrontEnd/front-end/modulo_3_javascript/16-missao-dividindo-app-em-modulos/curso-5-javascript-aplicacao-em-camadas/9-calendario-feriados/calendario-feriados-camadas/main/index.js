import imprime_feriados from "../imprimeFeriados/imprime_feriados.js";
import retorna_proximos_feriados from "../retornaFeriadoProximo/retorna_feriado.js";

console.log("Os próximos feriados serão: \n");
let numero_feriados = 3;

let proximos_feriados = retorna_proximos_feriados(numero_feriados);
imprime_feriados(proximos_feriados);
