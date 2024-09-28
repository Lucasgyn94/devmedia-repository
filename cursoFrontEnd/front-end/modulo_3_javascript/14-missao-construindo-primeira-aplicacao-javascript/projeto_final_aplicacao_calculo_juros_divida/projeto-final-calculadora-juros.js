import entrada_dados from 'readline-sync';

console.log("### Aplicação de Juros ###\n");

let valor_divida = entrada_dados.question("Informe o valor devido: ");

if (valor_divida > 0) {
    let dias_em_atraso = entrada_dados.question("Informe quantos dias se passaram do vencimento do boleto: ");
    console.log("\n");

    if (dias_em_atraso > 0) {
        console.log("Valor original da dívida: R$ " + Number(valor_divida).toFixed(2));
        console.log("Dias em atraso: " + dias_em_atraso);

        let taxa_de_juros_10 = 10;
        let taxa_de_juros_5 = 5;


        if (dias_em_atraso > 15) {
            let valor_divida_com_juros = (Number(valor_divida) + ( Number(valor_divida) * taxa_de_juros_10 ) / 100);
            console.log("Taxa de juros: " + taxa_de_juros_10 + "%");
            console.log("Valor total com juros: R$" + valor_divida_com_juros.toFixed(2));
        } else {
            let valor_divida_com_juros = (Number(valor_divida) + ( Number(valor_divida) * taxa_de_juros_5 ) / 100);
            console.log("Taxa de juros: " + taxa_de_juros_5 + "%");
            console.log("Valor total com juros: R$ " + valor_divida_com_juros.toFixed(2));
        }
    } else {
        console.log("Você está em dias!");
    }
} else {
    console.log("O valor da dívida deve ser maior que 0!");
}