// contexto de calculo de imc
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

export {calcula_imc, verifica_status_peso};