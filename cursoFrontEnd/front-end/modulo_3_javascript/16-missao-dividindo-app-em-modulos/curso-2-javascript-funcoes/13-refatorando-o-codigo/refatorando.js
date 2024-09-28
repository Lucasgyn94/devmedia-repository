let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

const verifica_intervalo_datas = (data, data_inicio, data_final, tipo_comparacao) => {
    if (tipo_comparacao === "and") {
        return (data >= data_inicio && data <= data_final);
    } else if (tipo_comparacao === "or") {
        return (data >= data_inicio || data <= data_final);
    }
}

const retorna_nome_signo = (signos, data) => {
    let ano = data.getFullYear();

    for (let signo of signos) {
        let data_inicio = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipo_comparacao = (signo["DataInicio"] === "12-22") ? "or" : "and";

        if (verifica_intervalo_datas(data, data_inicio, data_fim, tipo_comparacao)) {
            return signo["Nome"];
        }
    }
}

let data_app = new Date("2023-12-23 00:00:00");

const nome_signo = retorna_nome_signo(colecao_signos, data_app);

console.log("Signo de hoje: " + nome_signo);