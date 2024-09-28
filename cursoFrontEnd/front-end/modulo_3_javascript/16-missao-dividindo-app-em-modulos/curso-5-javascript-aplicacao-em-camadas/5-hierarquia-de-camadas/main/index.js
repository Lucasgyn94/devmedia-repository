import { verifica_altura_valida, verifica_peso_valido } from "../pesoAlturaVerificacao/pesoAlturaVerificacao.js";
import { calcula_imc, verifica_status_peso } from "../calculadoraIMC/calculadoraIMC.js";

// contexto de exibição
let peso = 78;
let altura = 1.72;
let altura_valida = verifica_altura_valida(altura);
let peso_valido = verifica_peso_valido(peso);

if (altura_valida && peso_valido) {
    let imc_calculado = calcula_imc(peso, altura);
    let status_peso = verifica_status_peso(imc_calculado);

    console.log(`IMC: ${imc_calculado}`);
    console.log(`Atualmente você está ${status_peso}`);

} else {
    console.log("Peso e Altura deve ser maior que 0.");
}



