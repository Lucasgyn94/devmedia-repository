function verifica_x_e_y_false() {
    var x = ""; // vazio retorna false
    var y = 0; // 0 retorna false

    if (x == y) { // false == false 
        console.log('X e Y são iguais.');
    } else {
        console.log('X e Y são diferentes.');
    }
}

function verifica_x_e_y_true() {
    var x = 1;
    var y = true;

    if (x == y) {
        console.log('X e Y são iguais.');
    } else {
        console.log('X e Y não são iguais.')
    }
}
verifica_x_e_y_true()