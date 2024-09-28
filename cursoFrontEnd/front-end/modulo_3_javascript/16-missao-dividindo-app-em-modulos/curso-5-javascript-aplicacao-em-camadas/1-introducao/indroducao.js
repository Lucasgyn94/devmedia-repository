function conversao_temperatura() {
    
    function fahrenheit_para_celsius(fahrenheit) {
        let celsius = (fahrenheit - 32) / 1.8;
        return celsius;
    }

    let fahrenheit = 70;
    let temp_em_celsius = fahrenheit_para_celsius(fahrenheit);
    console.log(`${fahrenheit} º Fahrenheit equivale à ${temp_em_celsius} º celsius`)


}

function calculadora_area() {
        
    function efetuar_calculo_area( raio) {
        const valor_pi = 3.14;
        let area = valor_pi * (raio * raio);
        return area;
    }

    let raio = 4;
    let calculo_area = efetuar_calculo_area(raio);
    console.log(calculo_area);
    
}
