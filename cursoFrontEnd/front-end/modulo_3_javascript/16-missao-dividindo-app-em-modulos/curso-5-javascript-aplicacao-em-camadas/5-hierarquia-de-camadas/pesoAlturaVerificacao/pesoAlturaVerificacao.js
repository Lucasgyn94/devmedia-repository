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

export {verifica_altura_valida, verifica_peso_valido};
