import entrada_dados from 'readline-sync';

function imprime_contador_for() {
    for (let contador = 0; contador < 10; contador++) {
        console.log(contador)
    }
}

function imprime_contador_while() {
    let contador = 0;

    while (contador < 10) {
        console.log(contador);
        contador++;
    }

}

function imprime_parcelas() {
    let valor_produto = 500;

    for (let contador = 1; contador <= 5; contador++) {
        let valor_parcela = valor_produto / contador;
        console.log("Número de parcela: " + contador + " - Valor da parcela: " + valor_parcela.toFixed(2))
    }

}

function imprime_valor_parcela_lido_usuario() {
    let valor_produto = 500;
    let quantidade_parcela = entrada_dados.question("Digite em quantas vezes deseja parcelar: ");

    for (let contador = 1; contador <= quantidade_parcela; contador++) {
        let valor_parcela = valor_produto / contador;
        console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
    }    
}

