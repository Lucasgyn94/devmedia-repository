function extrai_com_substr() {
    let frase = "Estou aprendendo JavaScript na DevMedia";

    let palavra_extraida = frase.substr(17, 10);

    console.log(palavra_extraida);
}

function extrai_com_substring() {

    let frase = "Eu sou programador JavaScript";

    let palavra_extraida = frase.substring(7, 18);
    
    console.log(palavra_extraida)
}

function extrai_especialista_substr() {
    let frase = "Lucas é especialista em JavaScript";

    let substring_1 = frase.substr(8, 12);

    console.log(substring_1); // especialista

}

let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";
let tamanho_conteudo = conteudo.length;
let resumo = "";

if (tamanho_conteudo > 100) {
    resumo = conteudo.substr(0, 97);
    resumo = resumo + "...";
} else {
    resumo = conteudo;
}

console.log(resumo);