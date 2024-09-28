// contexto de calculo
const calcula_imc = (peso, altura) => {
    let IMC = peso / (altura * altura);
    return IMC;
}

const verifica_status_peso = (imc) => {
    let status;

    if (imc < 18.5) {
        status = "Abaixo do peso!";
    } else if (imc > 18.5 && imc < 24.9) {
        status = "Peso normal!";
    } else if (imc > 24.9 && imc < 30) {
        status = "Acima do peso!";
    } else {
        status = "Obeso"
    }

    return status;
}

// contexto de exibição
let peso = 78;
let altura = 1.72;
let imc_calculado = calcula_imc(peso, altura);
let status_peso = verifica_status_peso(imc_calculado);

console.log(`IMC: ${imc_calculado}`);
console.log(`Atualmente você está ${status_peso}`);
