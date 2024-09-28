// camada de conversão de moedas;
const converte_dolar_real = (dolar) => {
    const taxa_conversao = 4.92;
    let real = dolar * taxa_conversao;
    return real;
}

const converte_dolar_euro = (dolar) => {
    const taxa_conversao = 0.83;
    let euro = dolar * taxa_conversao;
    return euro;
}

export {converte_dolar_euro, converte_dolar_real};