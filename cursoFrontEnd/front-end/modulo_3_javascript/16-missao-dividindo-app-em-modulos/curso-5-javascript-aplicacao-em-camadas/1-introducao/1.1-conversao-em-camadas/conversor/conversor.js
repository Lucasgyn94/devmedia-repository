function conversor_fahrenheit_para_celsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}

function conversor_celsius_para_fahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

export {conversor_celsius_para_fahrenheit, conversor_fahrenheit_para_celsius};
