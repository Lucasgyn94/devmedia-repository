
function url_modificada_var() {
    var url = 'https://api.com.br/usuarios';
    url = 'https://api.com.br/registros';
    console.log(url);
}

function url_constante_const() {
    const url = 'https://api.com.br/usuarios';

    url = 'https://api.com.br/registros';

    // Neste ponto o código vai quebrar
    //Uncaught TypeError: Assignment to constant variable.
}

url_constante_const()