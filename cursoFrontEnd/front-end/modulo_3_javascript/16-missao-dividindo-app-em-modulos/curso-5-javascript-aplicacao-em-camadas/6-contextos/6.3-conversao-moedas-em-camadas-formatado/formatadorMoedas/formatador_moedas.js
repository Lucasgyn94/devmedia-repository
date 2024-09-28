const formatador_dolar = (dolar) => {
    let valor_formatado = "$ " + dolar.toFixed(2);
    return valor_formatado;
}

const formatador_euro = (euro) => {
    let valor_formatado = "€ " + euro.toFixed(2);
    return valor_formatado;
}

const formatador_real = (real) => {
    let valor_formatado = "R$ " + real.toFixed(2);
    return valor_formatado;
}

export {formatador_dolar, formatador_euro, formatador_real};