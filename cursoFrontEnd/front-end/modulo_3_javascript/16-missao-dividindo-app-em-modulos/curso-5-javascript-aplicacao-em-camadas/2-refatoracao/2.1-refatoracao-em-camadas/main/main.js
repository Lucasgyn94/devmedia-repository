import converte_celsius_em_fahrenheit from "../conversor/conversor.js";
import verifica_status_temperatura from "../verificador/verifica-status.js";

let celsius = 40;
let fahrenheit = converte_celsius_em_fahrenheit(celsius);

console.log(fahrenheit);
verifica_status_temperatura(fahrenheit);