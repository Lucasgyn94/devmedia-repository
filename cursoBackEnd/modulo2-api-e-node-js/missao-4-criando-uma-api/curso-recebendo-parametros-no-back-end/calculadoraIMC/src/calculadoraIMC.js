const calcularIMC = (peso, altura) => {
    const imc = parseFloat(peso) / (parseFloat(altura) ** 2);
    return imc;
}

const retornaStatusPeso = (imc) => {
    let status = "";

    if(imc < 18.5){
        status = 'Abaixo do peso';
    } else if(imc >= 18.5 && imc < 24.9) {
        status = 'Peso Normal';
    } else if(imc >= 24.9 && imc < 30) {
        status = 'Acima do peso';
    } else {
        status = 'Obeso';
    }

    return status;
}

const validaParametro = (parametro) => {
    if (isNaN(parametro)) {
        return false;
    } else {
        return true;
    }
}

exports.calcularIMC = calcularIMC;
exports.retornaStatusPeso = retornaStatusPeso;
exports.validaParametro = validaParametro;
