function define_data_atual() {
    const data_atual = new Date();

    data_atual.setFullYear(1994);
    console.log(data_atual);

    data_atual.setMonth(8);
    console.log(data_atual);

    data_atual.setDate(5);
    console.log(data_atual);

    data_atual.setHours(11);
    console.log(data_atual);

    data_atual.setMinutes(38);
    console.log(data_atual);

    data_atual.setSeconds(48);
    console.log(data_atual);

    data_atual.setMilliseconds(15);
    console.log(data_atual);


}

function define_utc_dates() {
    const data_atual = new Date();

    data_atual.setUTCFullYear(1994);
    data_atual.setUTCMonth(5);
    data_atual.setUTCDate(20);
    data_atual.setUTCHours(11);
    data_atual.setUTCMinutes(0);
    data_atual.setUTCSeconds(59);
    data_atual.setUTCMilliseconds(15);

    console.log(data_atual)
}

const data_atual = new Date("2023 09 17 17:13:50");

console.log(data_atual.toDateString())

data_atual.setTime(886302309000);
console.log(data_atual);// Impressão: Sun Feb 01 1998
