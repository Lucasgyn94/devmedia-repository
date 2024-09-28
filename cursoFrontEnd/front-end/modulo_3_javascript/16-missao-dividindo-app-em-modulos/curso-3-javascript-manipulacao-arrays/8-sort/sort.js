function ordena_frutas() {
    const frutas = ["Manga", "Laranja", "Tangerina", "Banana"];

    console.log("$$$ Frutas antes da ordenação $$$");
    console.log(frutas);

    frutas.sort();


    console.log("\n$$$ Frutas após a ordenação $$$");
    console.log(frutas);

}

function ordena_numeros_array() {
    const numeros = [10, 1, 2, 5, 3];

    console.log("$$$ Array antes da ordenação $$$");
    console.log(numeros);

    function ordena_numeros(a, b) {
        return a - b;
    }

    numeros.sort(ordena_numeros);
    console.log("$$$ Array após a ordenação $$$");
    console.log(numeros);

}

function ordena_array_alunos() {
    
    let alunos = [
        {nome: "Lucas", matricula: 1},
        {nome: "Juliana", matricula: 132},
        {nome: "Gustavo", matricula: 58},
        {nome: "Augusto", matricula: 359}
    ]

    console.log("$$$ Array de Alunos antes da Ordenação");
    console.log(alunos);

    function ordena_alunos(a, b) {
        return a.matricula - b.matricula;
    }

    const alunos_ordenados = alunos.sort(ordena_alunos);
    console.log("$$$ \nArray de Alunos após a Ordenação");
    console.log(alunos_ordenados);

}

let tabela = [
    {equipe: 'Time Azul', pontos: 25 },
    {equipe: 'Time Verde', pontos: 47 },
    {equipe: 'Time Amarelo', pontos: 39 },
    {equipe: 'Time Vermelho', pontos: 16 },
];

console.log("$$$ Array de times antes da Ordenação $$$");
console.log(tabela);

function ordena_times(a, b) {
    return b.pontos - a.pontos;
}

console.log("$$$ \nArray de times após a Ordenação $$$");

tabela.sort(ordena_times);

for (let i = 0; i < tabela.length; i++) {
    let posicao = i + 1;

    console.log(posicao + " | " + tabela[i].equipe + " - " + tabela[i].pontos + " pts");
}
