function tamanho_nome() {
    let nome = "Lucas";
    let frase = "Está aprendendo JavaScript";

    let tamanho_nome = nome.length;
    let tamanho_frase = frase.length;

    console.log(tamanho_frase);
    console.log(tamanho_nome);
}

let cep = "74500-711";
if (cep.length != 9) {
    console.log("O CEP deve ter 9 caracteres")
} else {
    console.log(cep)
}