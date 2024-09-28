const alunos = ["Lucas", "Tampinha", "Diego", "Eduardo"];

const produtos = ["Notebook FE15", "Iphone X", "Mouse Microsoft"];

const valores = [4010.99, 10000.76, 90.15];

const itens_venda = [
    {produto: "Notebook FE15", valor: 4010.99, ativo: true},
    {produto: "Iphone X", valor: 10000.76, ativo: true},
    {produto: "Mouse Microsoft", valor: 90.15, ativo: false}
];

function altera_alunos() {
    const alunos = ["Lucas", "Tampinha", "Diego", "Eduardo"];
    alunos[2] = "Jose"

    console.log(alunos[0]);
}

altera_alunos();

function tamanho_array_alunos() {
    const alunos = ["Lucas", "Tampinha", "Diego", "Eduardo"];
    let tamanho_array = alunos.length;

    console.log("Tamanho do array: " + tamanho_array);

}

tamanho_array_alunos();

function alunos_um_a_um () {
    const alunos = ["Lucas", "Tampinha", "Diego", "Eduardo"];

    for (let i = 0; i < alunos.length; i++) {
        console.log(alunos[i]);
    }
}

alunos_um_a_um();