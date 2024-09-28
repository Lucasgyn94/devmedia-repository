import {converte_dolar_euro, converte_dolar_real} from '../conversorMoedas/conversor_moedas.js';

let dolar = 5;

let dolar_convertido_real = converte_dolar_real(dolar);
let dolar_convertido_euro = converte_dolar_euro(dolar);

console.log(`$${dolar} dolár(es) equivale à R$ ${dolar_convertido_real} reais`);
console.log(`$${dolar} euro(s) equivale à $${dolar_convertido_euro} euros`);