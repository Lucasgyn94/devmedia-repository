function acessa_funcionarios() {
    var funcionarios = [
        "Lucas", // indice 0
        "Danilo", // indice 1
        "Denise", // indice 2
        "Marcos", // indice 3
        "Roberta" // indice 4
    ];
    
    console.log(funcionarios[0]); // lucas
    console.log(funcionarios[2]); // denise
    
}

function acessa_cursos() {
    var cursos = [
        "Introdução ao Dart",
        "Variáveis em PHP",
        "Tipos de dados em Java",
        "Estruturas condicionais em Python",
        "Funções em JavaScript"
    ];
    
    console.log(cursos[0]); // Introdução ao Dart
    console.log(cursos[1]); // Variáveis em PHP
    console.log(cursos[2]); // Tipos de dados em Java
    console.log(cursos[3]); // Estruturas condicionais em Python
    console.log(cursos[4]); // Funções em JavaScript
    console.log(cursos[5]); // undefined
    
}


var notas_bimestre = [
    9,
    8,
    7.5,
    8.5
]

var total_notas = notas_bimestre.length;

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno = " + media_aluno)