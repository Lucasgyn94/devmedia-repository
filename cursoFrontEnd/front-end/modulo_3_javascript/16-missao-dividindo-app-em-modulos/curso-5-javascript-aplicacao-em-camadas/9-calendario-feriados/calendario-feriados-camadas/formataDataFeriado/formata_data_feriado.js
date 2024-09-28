const formata_dia_semana = (data_feriado) => {
    let diasDaSemana = ["Domingo","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return diasDaSemana[data_feriado.getDay()];
}

const formata_data_feriado = (data_feriado) => {
    const dia_feriado = data_feriado.getDate();
    const mes_feriado = data_feriado.getMonth() + 1;
    const ano_feriado = data_feriado.getFullYear();

    const data_exibicao = dia_feriado + "/" + mes_feriado + "/" + ano_feriado;
    return data_exibicao;
}

export {formata_dia_semana, formata_data_feriado};
