// contexto de calculo
const calcula_imc = (peso, altura) => {
    let IMC = peso / (altura * altura);
    return IMC;
}

// contexto de exibição
let peso = 78;
let altura = 1.72;

let imc_calculado = calcula_imc(peso, altura);

console.log(`IMC: ${imc_calculado}`);