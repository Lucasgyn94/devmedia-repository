function altera_disciplinas() {
    var disciplinas = [
        "Português",    // índice 0
        "Matemática",   // índice 1
        "História",     // índice 2
        "Geografia",    // índice 3
        "Química",      // índice 4
        "Física",       // índice 5
        "Inglês"        // índice 6
    ];
    
    console.log("Antes da Mudança: \n")
    disciplinas.forEach(disciplina => console.log(disciplina));
    
    disciplinas[6] = "Espanhol";
    
    console.log("\nDepois da Mudança: \n")
    
    disciplinas.forEach(disciplina => console.log(disciplina));
    
}

function altera_funcionarios() {
    var funcionarios = [
        "Bárbara",
        "Lucas",
        "Helena",
        "Maria",
        "Rogerio"
    ]
    
    var novos_funcionarios = [
        "Guilherme",
        "Jessica"
    ]
    
    funcionarios[0] = novos_funcionarios[1];
    funcionarios[4] = novos_funcionarios[0];
    
    funcionarios.forEach(fun=>console.log(fun));
}