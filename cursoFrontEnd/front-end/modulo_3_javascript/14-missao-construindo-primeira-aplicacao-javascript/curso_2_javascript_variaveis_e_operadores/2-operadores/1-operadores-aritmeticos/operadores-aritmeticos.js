
function aritmeticos() {
    var quantidade_vagas = 2 + 5;
    var contratados = 7 - 2;
    var valor_contribuicao = 2500 * 0.10;
    var primeira_parcela = 2500;

    console.log(
        quantidade_vagas + '\n' +
        contratados + '\n' +
        valor_contribuicao + '\n' +
        primeira_parcela
    )

}

function modulos() {
    var resto1 = 15 % 4;
    var resto2 = 3 % 1.2;

    console.log(
        resto1 + '\n' +
        resto2
    );
}

function juntando_strings_com_adicao() {
    console.log("texto" + " e complemento");
    // Vai imprimir "texto e complemento"

    console.log("5" + "6");
    // Vai imprimir "56"

    console.log("texto" + 20); // "texto20"
    console.log("texto" + true); // "textotrue"
    console.log("texto" + null); // "textonull"
    console.log("texto" + undefined); // "textoundefined"
    console.log( [1,2,3] + 4 ) // "1,2,34"
    console.log( {nome:'José'} + 1 ); // “[object Object]1”
}

function outros_ex_conversao() {
    console.log(5 + 20); // 25
    console.log(5 + true); // 6
    console.log(5 + null); // 5
    console.log(true + true); // 2
    console.log(true + null); // 1
    console.log(null + null); // 0
    console.log(null + false); // 0
    console.log(5 + undefined); // NaN
    console.log(null + undefined); // NaN
}

function operacao_e_atribuicao() {
    var preco = 10;
    preco = preco + 20;

    console.log(preco);

    var preco = 20;
    preco += 1;

    console.log(preco);
}

//Podemos usar qualquer operador aritmético em conjunto com o operador de igualdade nas formas +=, -=, *=, /= ou %=.
/**
 * ORDEM DE OPERAÇÃO
 * -> Multiplicação
 * -> Divisão
 * -> Adição
 * -> Subtração
 */