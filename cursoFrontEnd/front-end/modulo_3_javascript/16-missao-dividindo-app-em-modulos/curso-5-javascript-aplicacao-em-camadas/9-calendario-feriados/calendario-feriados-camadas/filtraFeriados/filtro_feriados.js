
const filtra_feriados = (feriados_nacionais, numeros_feriados)=> {
    const data_atual = new Date();
    const ano_atual = data_atual.getFullYear();

    let proximos_feriados = [];
    let nova_data_feriado;

    feriados_nacionais.forEach((feriado) => {
        nova_data_feriado = new Date(feriado.data + "/" + ano_atual);

        if (data_atual > nova_data_feriado) {
            nova_data_feriado.setFullYear(ano_atual + 1);
        }

        proximos_feriados.push({
                nome: feriado.nome,
                data: nova_data_feriado
            });
    });

    proximos_feriados = proximos_feriados.sort((a, b) => a.data - b.data);
    proximos_feriados = proximos_feriados.slice(0, numeros_feriados);

    return proximos_feriados;
}

export default filtra_feriados;

