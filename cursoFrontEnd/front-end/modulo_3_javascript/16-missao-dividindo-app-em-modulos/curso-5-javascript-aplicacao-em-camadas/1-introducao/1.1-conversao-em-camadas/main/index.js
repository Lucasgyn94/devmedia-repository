import { conversor_celsius_para_fahrenheit, conversor_fahrenheit_para_celsius } from '../conversor/conversor.js';


function converte_para_celsius() {
    let fahrenheit = 70;
    let temperatura_celsius = conversor_fahrenheit_para_celsius(fahrenheit);
    console.log(`${fahrenheit} º graus fahrenheit equivalem à ${temperatura_celsius} ª graus celsius`);
}


function converte_para_fahrenheit() {
    let celsius = 90;
    let temperatura_fahrenheit = conversor_celsius_para_fahrenheit(celsius);
    console.log(`${celsius} º graus celsius equivalem à ${temperatura_fahrenheit} ª graus fahrenheit`);


}

converte_para_celsius();
converte_para_fahrenheit();