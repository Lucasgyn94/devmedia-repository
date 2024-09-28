function comparacao() {
    console.log(true && false); // false
    console.log(false || false); // false
    console.log(!true); // false

    console.log(1 == '1' || "a" == "a"); // true
    console.log(35 === '35' && 1 == 10); // false
    console.log(!( 'a' == 1)); // true

}

function e_logico() {
    console.log(true && true); // true
    console.log(true && false); // false
    console.log(false && false); // false
}

function ou_logico() {
    console.log(true || false); // true
    console.log(false || true); // true
    console.log(false || false); // false
}

function nao_logico() {
    console.log(!true); // false
    console.log(!false); // true
    
    console.log(!(true || false)); // false
    console.log(!(true || true && false)); // false
}


var idade = 19
var classificao = idade >= 18
console.log(classificao)