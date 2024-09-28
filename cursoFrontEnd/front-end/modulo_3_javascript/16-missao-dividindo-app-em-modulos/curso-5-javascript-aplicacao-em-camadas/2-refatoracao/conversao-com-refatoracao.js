
function converte_celsius_em_fahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32
    return fahrenheit;
}

function verifica_temperatura_alta(fahrenheit) {
    if (fahrenheit >= 99) {
        console.log("Temperatura alta!");
    } else {
        console.log("Temperatura normal!");
    }
}

function imprime_temperatura_convertida(celsius, temp_fahrenheit) {
    
    console.log(`${celsius}º graus celsius equivalem à ${temp_fahrenheit}º graus fahrenheit.`);

}

let celsius = 40;
let temp_fahrenheit = converte_celsius_em_fahrenheit(celsius);

imprime_temperatura_convertida(celsius, temp_fahrenheit);

verifica_temperatura_alta(temp_fahrenheit);

