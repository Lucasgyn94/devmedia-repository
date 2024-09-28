function adiciona_espaco() {
    let label_aluno = "Aluno";
    let valor_aluno = "Lucas";

    let label_grau = "Grau de escolaridade";
    let valor_grau = "Ensino Medio Completo";

    console.log(label_aluno.padStart(20 , " ") + ": " + valor_aluno);
    console.log(`${label_grau.padStart(20, " ")}: ${valor_grau}`);

}

function adiciona_espaco_final_email() {
    let label = "Email: ";
    let email = "contato@email.com";

    console.log(`${label.padEnd(20, " ")} ${email}`)


}

let label_nome = "Nome: ";
let valor_nome = "Lucas Ferreira da Silva";

let label_profissao = "Profissão: ";
let valor_profissao = "Student";

let label_endereco = "Endereço: ";
let valor_endereco = "Avenida Contorno 150";

console.log(label_nome.padEnd(25, ".") + valor_nome);
console.log( label_profissao.padEnd(25, '.') + valor_profissao );
console.log( label_endereco.padEnd(25, '.') + valor_endereco );