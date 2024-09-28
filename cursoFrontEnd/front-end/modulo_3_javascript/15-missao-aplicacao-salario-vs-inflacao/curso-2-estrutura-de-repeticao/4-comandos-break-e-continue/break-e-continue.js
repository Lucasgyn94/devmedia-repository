let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

function funcionario_break() {
    let contador = 0;
    let encontrouHabilitado = false;

    while ( contador < funcionarios.length ) {

        let funcionario = funcionarios[contador];

        if( funcionario.habilitado == true ){
            console.log("Funcionário habilitado encontrado: " + funcionario.nome);
            encontrouHabilitado = true;
            break;
        }

        contador++;
    }

    if (!encontrouHabilitado) {
        console.log("Nenhum funcionário habilitado encontrado");
    }

    // Funcionário habilitado encontrado: Renan

}


function retira_alunos_abaixo_de_6() {
    let alunos = [
        {id: 1, nome: "Lucas", media: 10},
        {id: 2, nome: "Laura", media: 7},
        {id: 3, nome: "José", media: 5},
        {id: 4, nome: "Guilherme", media: 4},
        {id: 5, nome: "Rafael", media: 10},
    ];
    
    let contador = 0;

    while ( contador < alunos.length ) {

        let aluno = alunos[contador];

        contador++;

        if ( aluno.media < 6 ) {
            continue;
        }
        // serão retornados todos alunos que possuem notas
        // maiores que 6

        console.log("Id: " + aluno.id);
        console.log("Nome: " + aluno.nome);
        console.log("Média: " + aluno.media);
        console.log("\n");

    }

    // Id: 1
    // Nome: Lucas
    // Média: 10


    // Id: 2
    // Nome: Laura
    // Média: 7


    // Id: 5
    // Nome: Rafael
    // Média: 10
}