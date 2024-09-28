import entrada_dados from 'readline-sync';

function soma_x_e_y() {
    let x = entrada_dados.question("Digite o valor de x: ");
    let y = entrada_dados.question("Digite o valor de y: ");

    let soma = Number(x) + Number(y);

    console.log("A soma de " + x + " + " + y + " = " + soma);
}