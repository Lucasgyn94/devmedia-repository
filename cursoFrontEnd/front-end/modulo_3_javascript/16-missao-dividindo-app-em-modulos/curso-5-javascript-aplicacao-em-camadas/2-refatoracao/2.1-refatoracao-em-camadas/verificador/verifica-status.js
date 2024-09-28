const verifica_status_temperatura = (fahrenheit) => {
    if (fahrenheit >= 99) {
        console.log("Temperatura alta!");
    } else {
        console.log("Temperatura normal.");
    }
}

export default verifica_status_temperatura;


