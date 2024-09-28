function calcula_media(n1, n2) {
    let soma = n1 + n2;
    let media = soma / 2;
    let status;

    if (media >= 6) {
        status = "aprovado";
    } else {
        status = "reprovado"
    }
    return status;
}

let status_aluno_1 = calcula_media(5, 5);
let status_aluno_2 = calcula_media(8, 9);

console.log("Status Aluno 1: " + status_aluno_1);
console.log("Status Aluno 2: " + status_aluno_2);