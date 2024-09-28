
function leitura_dados_var () {
    var programador = "Lucas";
    var idade = 29;

    console.log("Programador = " + programador + "\nIdade = " + idade);
}

function leitura_dados_let () {
    let tecnologia = "Javascript";
    let anoAtual = 2023;
    let nome = "Lucas";
    let nome_cachorro = "Tampinha";

    console.log("Tecnologia = " + tecnologia
            +   "\nAnoAtual = " + anoAtual
            +   "\nNome = " + nome 
            +   "\nNome do cachorro = " + nome_cachorro)
}
leitura_dados_let()
/**Váriáveis declaradas com var podem ser
 * sobreescritas, já com let não
 */
