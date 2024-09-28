function imprime_data_sem_parametro() {
    const hoje = new Date();
    console.log(hoje);
}

function imprime_data_string_com_parametro() {
    const ex_1 = new Date("1994-08-05");
    const ex_2 = new Date("1994-08-05 10:55:00");

    console.log(ex_1);
    console.log(ex_2);
}

const ex_3 = new Date(1994, 8, 5, 10, 55, 4, 15);
console.log(ex_3)