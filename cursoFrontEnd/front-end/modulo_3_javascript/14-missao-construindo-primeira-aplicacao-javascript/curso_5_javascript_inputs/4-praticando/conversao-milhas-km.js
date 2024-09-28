import entrada_dados from 'readline-sync'

function conversao_milhas_para_km() {
    console.log("Conversor de Milhas para Quilômetros: \n");

    let milhas = entrada_dados.question("Informe o valor em milha(s) para conversão em km: ");

    let km = milhas * 1.6;
    
    console.log(milhas + " milha(s) equivalem à " + km + " km.")
}


function conversao_milhas_para_km_dividindo() {
    
    console.log("Conversor de Milhas para Quilômetros: \n");

    let mi = entrada_dados.question("Informe o valor em Milhas: ");

    let km = mi / 0.62137;

    console.log(mi + " milhas equivalem à " + km + " km.");

}

function conversor_celsius_para_kelvin() {
    console.log("### Conversor de Celsius para Kelvin ###\n");

    let celsius = entrada_dados.question("Digite o valor da temperatura em celsius: ");
    let kelvin = Number(celsius) + 273.15;

    console.log(celsius + " graus celsius equivalem à " + kelvin + " graus kelvin.");
    
}

function calcula_area_triangulo() {
    console.log("### CALCULADORA ÁREA DO TRIÂNGULO");

    let base = entrada_dados.question("Digite o valor da base do triângulo: ");
    let altura = entrada_dados.question("Digite o valor da altura do triângulo: ");

    let area = (base * altura) / 2;

    console.log("Área do triângulo de base " + base + " e altura " + altura + " = " + area);

}

import entradaDados from 'readline-sync';

let alunos = [
    {aluno: "John", matricula: 117},
    {aluno: "Kelly", matricula: 87},
    {aluno: "Samuel", matricula: 34}
];

let indice = entradaDados.question("Digite o indice do objeto desejado: ");

console.log("Nome: "+alunos[indice].aluno);
console.log("Matrícula: "+alunos[indice].matricula);

