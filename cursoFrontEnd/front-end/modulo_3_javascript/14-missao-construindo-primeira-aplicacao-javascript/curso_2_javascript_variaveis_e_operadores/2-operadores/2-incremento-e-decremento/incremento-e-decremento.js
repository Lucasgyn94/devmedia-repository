
function contador_mais_e_menos() {
    var contador = 5;
    contador++;
    console.log(contador);// contador agora vale 6

    contador--;
    console.log(contador);// contador agora vale 5
}

function ordem_incremento_decremento() {
    //Quando colocados o operador antes do nome, o valor muda imediatamente
    var numero = 9;
    console.log(++numero);

    //Neste caso, primeiro o valor será alterado de 9 para 10 e depois ele será impresso.
    var numero = 9;
    console.log(numero++);
}
