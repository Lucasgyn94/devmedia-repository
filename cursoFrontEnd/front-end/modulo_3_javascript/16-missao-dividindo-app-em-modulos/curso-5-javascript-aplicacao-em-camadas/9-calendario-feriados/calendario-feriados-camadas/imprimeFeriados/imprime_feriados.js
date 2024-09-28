const imprime_feriados = (feriados_filtro) => {
    feriados_filtro.forEach((feriado) => {
        const nome = feriado.nome;
        const dia_semana = feriado.dia_semana;
        const data_feriado = feriado.data;

        console.log(`${nome} cairá em ${dia_semana}, ${data_feriado}`);
    });
}

export default imprime_feriados;
