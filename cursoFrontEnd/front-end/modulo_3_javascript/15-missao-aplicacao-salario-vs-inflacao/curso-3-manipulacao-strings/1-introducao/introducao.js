function extraindo_palavra_sem_metodo_nativo() {
    let frase = "Estou aprendendo JavaScript na DevMedia";
    let palavra = "";
    let palavra_inicio = 16;
    let palavra_fim = 27;


    for (let contador = 0; contador <= frase.length; contador++) {
        if (contador >= palavra_inicio && contador <= palavra_fim) {
            palavra += frase.charAt(contador);
        }
    }

    console.log(palavra);

}

function extraindo_palavra_com_metodo_nativo() {
    
    let frase = "Estou aprendendo JavaScript na DevMedia";
    let palavra = "";
    let palavra_inicio = 16;
    let palavra_fim = 27;

    palavra = frase.substring(palavra_inicio, palavra_fim);

    console.log(palavra)
}

