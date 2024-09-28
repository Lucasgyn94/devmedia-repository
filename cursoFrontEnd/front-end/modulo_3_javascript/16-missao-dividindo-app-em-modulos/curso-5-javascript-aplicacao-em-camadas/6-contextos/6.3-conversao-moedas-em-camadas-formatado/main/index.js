import { converte_dolar_euro, converte_dolar_real } from "../conversorMoedas/conversor_moedas.js";
import {formatador_dolar, formatador_euro, formatador_real} from "../formatadorMoedas/formatador_moedas.js";

let conversor = "euro";
let dolares = 5;

let valor_convertido;

if (conversor === "real") {
    valor_convertido = converte_dolar_real(dolares);
    valor_convertido = formatador_real(valor_convertido);
} else if (conversor === "euro") {
    valor_convertido = converte_dolar_euro(dolares);
    valor_convertido = formatador_euro(valor_convertido);
} else {
    console.log("Conversor inexistente!");
}

console.log("Você possui " + dolares + " doláres");
console.log("Valor Convertido = " + valor_convertido + " euros");