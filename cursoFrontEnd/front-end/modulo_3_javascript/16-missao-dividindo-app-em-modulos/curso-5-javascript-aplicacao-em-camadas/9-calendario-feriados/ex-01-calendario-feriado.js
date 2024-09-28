const feriadosNacionais = [
    { nome: 'Confraternização universal',   data: '01/01'},
    { nome: 'Tiradentes',                   data: '04/21'},
    { nome: 'Dia do trabalho',              data: '05/01'},
    { nome: 'Independência do Brasil',      data: '09/07'},
    { nome: 'Nossa senhora aparecida',      data: '10/12'},
    { nome: 'Finados',                      data: '11/02'},
    { nome: 'Proclamação da república',     data: '11/15'},
    { nome: 'Natal',                        data: '12/25'},
];

const data_atual = new Date();
const ano_atual = data_atual.getFullYear();

let numero_feriados = 3;

let proximos_feriados = feriadosNacionais.map((feriado) => {
    let nova_data_feriado = new Date(feriado.data + "/" + ano_atual);

    if (data_atual > nova_data_feriado) {
        nova_data_feriado.setFullYear(ano_atual + 1);
    }

    return {
        nome: feriado.nome,
        data: nova_data_feriado
    };
});

proximos_feriados = proximos_feriados.sort((a, b) => a.data - b.data);
proximos_feriados = proximos_feriados.slice(0, numero_feriados);

const dias_da_semana = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"];

console.log("Os próximos feriados serão \n");

proximos_feriados.forEach((feriado) => {
    const data_feriado = feriado.data;
    const dia_semana = dias_da_semana[data_feriado.getDay()];
    const dia_feriado = data_feriado.getDate();
    const mes_feriado = data_feriado.getMonth();
    const ano_feriado = data_feriado.getFullYear();
    const data_exibicao = dia_feriado + "/" + mes_feriado + "/" + ano_feriado;
    console.log(`${feriado.nome} cairá em ${dia_semana}, ${data_exibicao}`);
});




















/*
const data_atual = new Date();
const ano_atual = data_atual.getFullYear(); // Corrigido

let numero_feriados = 3;

let proximos_feriados = feriadosNacionais.map((feriado) => {
    let nova_data_feriado = new Date(feriado.data + "/" + ano_atual); // Corrigido

    if (data_atual > nova_data_feriado) {
        nova_data_feriado.setFullYear(ano_atual + 1);
    }

    return {
        nome: feriado.nome,
        data: nova_data_feriado // Corrigido
    };
});

proximos_feriados = proximos_feriados.sort((a, b) => a.data - b.data);
proximos_feriados = proximos_feriados.slice(0, numero_feriados); // Corrigido

const dias_da_semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

console.log('\nOs próximos feriados serão:\n')

proximos_feriados.forEach((feriado) => {
    const data_feriado = feriado.data;
    const dia_semana = dias_da_semana[data_feriado.getDay()];
    const dia_feriado = data_feriado.getDate();
    const mes_feriado = data_feriado.getMonth() + 1;
    const ano_feriado = data_feriado.getFullYear();
    const data_exibicao = dia_feriado + "/" + mes_feriado + "/" + ano_feriado;
    console.log(`${feriado.nome} cairá em ${dia_semana}, ${data_exibicao}`);
});

*/