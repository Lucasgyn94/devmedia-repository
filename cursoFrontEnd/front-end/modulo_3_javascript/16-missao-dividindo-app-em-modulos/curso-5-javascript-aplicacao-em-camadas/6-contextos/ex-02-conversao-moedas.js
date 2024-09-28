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

// camada de exibição
let dolar = 5;

let dolar_convertido_real = converte_dolar_real(dolar);
let dolar_convertido_euro = converte_dolar_euro(dolar);

console.log(`$${dolar} dolár(es) equivale à R$ ${dolar_convertido_real} reais`);
console.log(`$${dolar} euro(s) equivale à $${dolar_convertido_euro} euros`);