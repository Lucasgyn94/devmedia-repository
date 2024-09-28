let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-21","DataFim":"02-19"},
    {"Nome": "Peixes", "DataInicio": "02-20","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-20"},
    {"Nome": "Touro", "DataInicio": "04-21","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-23"},
    {"Nome": "Virgem", "DataInicio": "08-24","DataFim":"09-23"},
    {"Nome": "Libra", "DataInicio": "09-24","DataFim":"10-23"},
    {"Nome": "Escorpião", "DataInicio": "10-24","DataFim":"11-22"},
    {"Nome": "Sagitário", "DataInicio": "11-23","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-20"}
];
   
const retorna_nome_signo = (signos) => {
    let data = new Date("2020-02-07 00:00:00");
    
    let ano = data.getFullYear();

    let data_inicial = new Date(ano + "-" + signos[0]["DataInicio"] + " 00:00:00");
    let data_final = new Date(ano + "-" + signos[0]["DataFim"] + " 23:59:59");

    if (data >= data_inicial && data <= data_final) {
        return signos[0]["Nome"];
    }
}

const nome_signo = retorna_nome_signo(colecao_signos);

console.log("Signo de hoje " + nome_signo);