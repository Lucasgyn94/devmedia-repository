function meses_do_ano() {
    var meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
    
    let mes_aniversario = meses[7];
    console.log("Seu aniversário e em: " + mes_aniversario); // posicao 7 = agosto
    console.log("\n")
    
    meses.forEach(mes => console.log(mes));
}

function imprime_tecnologias() {
        
    var tecnologias = [
        "JavaScript",
        "Dart",
        "React",
        "Angular"
    ]

    tecnologias.forEach(tec => console.log(tec));
}

function imprime_numeros() {
    var numeros_premiados = [
        10,
        14,
        21,
        22,
        39,
        48
    ]

    numeros_premiados.forEach(num => console.log(num));
}

imprime_numeros()