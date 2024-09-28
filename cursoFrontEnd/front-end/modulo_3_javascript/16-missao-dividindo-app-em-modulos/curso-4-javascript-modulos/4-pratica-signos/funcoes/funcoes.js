const verifica_intervalo_data = (data, data_inicio, data_fim, tipo_comparacao) => {
    if (tipo_comparacao === "and") {
        return data >= data_inicio && data <= data_fim;
    } else if (tipo_comparacao === "or") {
        return data >= data_inicio || data <= data_fim;
    }
}

const retorna_signos = (signos, data) => {
    let ano = data.getFullYear();

    for (const signo of signos) {

        let data_inicial = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_final = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipo_comparacao = (signo["DataInicio"] === "12-22") ? "or" : "and";

        if (verifica_intervalo_data(data, data_inicial, data_final, tipo_comparacao)) {
            return signo["Nome"];
        }
    }
}

export default retorna_signos;