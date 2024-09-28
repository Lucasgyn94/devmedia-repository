import feriadosNacionais from "../dataFeriados/data_feriados.js";
import filtra_feriados from "../filtraFeriados/filtro_feriados.js"
import { formata_data_feriado, formata_dia_semana } from "../formataDataFeriado/formata_data_feriado.js";

const retorna_proximos_feriados = (numero_feriados) => {
    let feriados_filtro = filtra_feriados(feriadosNacionais, numero_feriados);

    let feriados_filtro_formatados = [];

    feriados_filtro.forEach((feriado) => {
        const data_feriado = feriado.data;
        let dia_semana = formata_dia_semana(data_feriado);
        const data_feriado_formatada = formata_data_feriado(data_feriado);

        feriados_filtro_formatados.push({
            nome: feriado.nome,
            dia_semana: dia_semana,
            data: data_feriado_formatada
        })
    });

    return feriados_filtro_formatados;

}

export default retorna_proximos_feriados;
