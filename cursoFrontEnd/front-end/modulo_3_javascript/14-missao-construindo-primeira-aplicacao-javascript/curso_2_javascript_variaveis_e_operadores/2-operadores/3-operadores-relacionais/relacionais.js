// Os operadores de comparação são: ==, !=, <, >, <=, >=, === e !==.
function verifica_se_igual(){
    console.log( 21 == 21 ); // vai imprimir true
    console.log( 120 == 100); // vai imprimir false
}

function verifica_se_diferente() {
    console.log( 11 != 21 ); // vai imprimir true
    console.log( 100 != 100); // vai imprimir false
}

function verifica_com_tipos_diferentes() {
    console.log(  '20' == 20  ); // true
    console.log(  true == 1 ) ; // true
}

function igualdade_e_desigualdade_estrita() {
    console.log("21" === 21) // o resultado será false
    console.log(1 === true) // o resultado será false

    console.log('21' !== 21);
    console.log(1 !== true);
}

function conversao_tipo() {
    console.log(null == undefined); // // o resultado será true
    console.log(null != undefined);  // o resultado será false
    console.log(true == 1); // o resultado será true
    console.log(true != 1); // o resultado será false
    console.log(false == 0); // o resultado será true
    console.log(false != 0); // o resultado será false


}

function operadores_menor_maior() {
    console.log(13 < 100) // true
    console.log(34 < 5) // false

    console.log(20 > 10); // true
    console.log(20 > 50); // false

    console.log(13<= 100) // true
    console.log( 13 <= 13) // true

    console.log(34 <= 5) // false
    console.log(34 <= 34) // true
}