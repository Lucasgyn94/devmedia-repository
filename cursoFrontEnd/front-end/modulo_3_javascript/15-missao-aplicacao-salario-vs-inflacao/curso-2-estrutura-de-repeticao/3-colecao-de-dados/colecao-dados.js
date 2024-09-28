function while_imprime_paises() {
    let paises = ["Brasil", "Suíça", "França", "Japão"];

    let contador = 0;

    while (contador < paises.length) {
        console.log(paises[contador]);
        contador++;
    }
}

function pares_e_impares() {
    let numeros = [10, 5, 7, 8, 9, 6, 12, 4];

    let total_impares = 0;
    let total_pares = 0;

    let contador = 0;

    while (contador <= numeros.length) {
        if (numeros[contador] % 2 === 0) {
            total_pares++;
        } else {
            total_impares++;
        }

        contador++;
    }

    console.log(" O total de números ímpares é: " + total_impares);
    console.log(" O total de números pares é: " + total_pares);

}

function imprime_alunos() {
    let alunos = ["Lucas","Carlos","Danilo","Pedro","César"];

    let contador = 0;

    while (contador < alunos.length) {
        let nome_aluno = alunos[contador];
        console.log("Aluno: " + nome_aluno);
        contador++;
    }
}