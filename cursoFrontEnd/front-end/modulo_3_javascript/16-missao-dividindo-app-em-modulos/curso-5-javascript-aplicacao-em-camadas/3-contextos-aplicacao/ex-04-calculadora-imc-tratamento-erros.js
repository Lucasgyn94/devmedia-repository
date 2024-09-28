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


// contexto de verificação de peso e altura

const verifica_peso_valido = (peso) => {
    let peso_valido = false;

    if (peso > 0) {
        peso_valido = true;
    }

    return peso_valido;
}


const verifica_altura_valida = (altura) => {
    let altura_valida = false;

    if (altura > 0) {
        altura_valida = true;
    }
    return altura_valida;
}

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



