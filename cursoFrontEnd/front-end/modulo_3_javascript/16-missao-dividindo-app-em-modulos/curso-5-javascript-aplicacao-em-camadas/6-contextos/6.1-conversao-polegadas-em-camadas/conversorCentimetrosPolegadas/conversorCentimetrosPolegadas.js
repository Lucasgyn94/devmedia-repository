import formata_polegadas from "../formatacaoPolegadas/formatacaoPolegadas.js";

const converte_centimetros_polegadas = (centimetros) => {
    let polegadas = centimetros / 2.54;
    let polegadas_formatada = formata_polegadas(polegadas);
    return polegadas_formatada;
}

export default converte_centimetros_polegadas;