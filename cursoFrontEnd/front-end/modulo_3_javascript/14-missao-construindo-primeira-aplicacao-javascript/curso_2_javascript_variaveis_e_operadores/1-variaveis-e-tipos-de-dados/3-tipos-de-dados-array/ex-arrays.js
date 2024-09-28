// declarando um array de estados
function leitura_estados_forEach() {
    var estados = ["Goiás", "Rio de Janeiro", "São Paulo"];
    estados.forEach(estado => console.log(estado))
}


function acessando_valor_array () {
    var estados = ["Goiás", "Rio de Janeiro", "São Paulo"];
    console.log(estados[0]) // Goiás


    var estados = ["Goiás", "Rio de Janeiro", "São Paulo"];
    console.log(estados[1]) // Rio de Janeiro


    var estados = ["Goiás", "Rio de Janeiro", "São Paulo"];
    console.log(estados[2]) // São Paulo

}

function alterando_valor_array() {
    var linguagens = ["JavaScript", "Java", "Python", "C#"];
    linguagens[3] = "C";

    linguagens.forEach(linguagem => console.log(linguagem)); // Javascript, java, python, c#
}


function aramazenamento_tipos_diferentes() {
    var titulo = "Programador";
    var qtd_vagas = 5;
    var vaga_ativa = true;
    // codigo acima declarado dentro de um array
    var vagas = ["Programador", 5, true];
    
    vagas.forEach(vaga => console.log(vaga));
}

function contando_qtd_elementos() {
    var linguagens = ["JavaScript", "Java", "Python", "C#"];
    console.log(linguagens.length);
}

function quando_usar_arrays() {
    var telefone1 = "62 9 9192-0459";
    var telefone2 = "62 9 8431-3456";
    // forma mais elegante de guardar os numeros
    var telefones = [
        "62 9 9192-0459",
        "62 9 8431-3456",
        "62 9 8431-3266"
    ];



    var meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ]

    var redesSociais = [
        "linkedin",
        "twitter",
        "facebook",
        "instagram"
    ]

    var menu = [
        "Todas",
        "Vídeos",
        "Notícias",
        "Maps"
    ]

    telefones.forEach(telefone => console.log(telefone));
    console.log("\n");
    meses.forEach(mes => console.log(mes));
    console.log("\n");
    menu.forEach(conteudo => console.log(conteudo));
    console.log("\n");
    redesSociais.forEach(rede => console.log(rede));
}

