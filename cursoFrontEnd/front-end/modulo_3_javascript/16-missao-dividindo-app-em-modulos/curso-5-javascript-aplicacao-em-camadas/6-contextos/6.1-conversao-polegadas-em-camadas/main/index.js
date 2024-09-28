import converte_centimetros_polegadas from "../conversorCentimetrosPolegadas/conversorCentimetrosPolegadas.js";

let centimetros = 30;

let centimetros_convertido_polegadas = converte_centimetros_polegadas(centimetros);

console.log(`${centimetros}cm equivale à ${centimetros_convertido_polegadas} polegadas.`);