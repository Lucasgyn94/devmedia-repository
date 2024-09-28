

function dados_produto_e_cliente() {
    var produto = {
        id: 9,
        nome: "Cafeteira Elétrica",
        valor: 99.00
    };
    
    var cliente = {
        id: 29,
        nome: "Lucas Silva",
        telefone: "(62) 99999-9999"
    };

    console.log(produto.id);
    console.log(produto.nome);
    console.log(produto.valor);

    console.log(cliente.id);
    console.log(cliente.nome);
    console.log(cliente.telefone);
}

function dados_aula() {
    var aula = {
        id: 10,
        titulo: 'Objetos literais',
        tecnologia: 'JavaScript'
    };
    
    var usuario_logado = true;
    
    
    console.log(aula.id); // 10
    console.log(aula.titulo); // Objetos literais
    console.log(aula.tecnologia); // JavaScript
    
    console.log(usuario_logado); // true
    
}

function verifica_classificacao_etaria() {
    var usuario = {
        id: 2,
        nome: "Lucas Ferreira da Silva",
        idade: 29
    }
    
    var atendeClassificacaoEtaria = usuario.idade >= 18 ?
        "O usuário pode assistir ao conteúdo." : 
        "O usuário não pode assistir ao conteúdo."
    
    console.log(atendeClassificacaoEtaria);    
}

