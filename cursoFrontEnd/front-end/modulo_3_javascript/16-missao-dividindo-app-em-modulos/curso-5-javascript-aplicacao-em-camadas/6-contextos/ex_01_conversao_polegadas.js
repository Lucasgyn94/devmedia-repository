
// camada de conversão de medidas
const converte_centimetros_polegadas = (centimetros) => {
    let polegadas = centimetros / 2.54;
    return polegadas;
}

// camada de exibição
let centimetros = 30;
let centimetro_convertido_polegada = converte_centimetros_polegadas(centimetros);

console.log(centimetro_convertido_polegada);