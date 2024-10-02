const converterTemperatura = (grauTemperatura, tipoTemperatura) => {
    if (tipoTemperatura === 'C') {
        return converteFahrenheitParaCelsius(grauTemperatura);
    } else if (tipoTemperatura === 'F') {
        return converteCelsiusParaFahrenheit(grauTemperatura);
    }
}

const converteFahrenheitParaCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) / 1.8;
    return parseFloat(celsius.toFixed(2));
}

const converteCelsiusParaFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 1.8) + 32;
    return parseFloat(fahrenheit.toFixed(2));
}

exports.converterTemperatura = converterTemperatura;