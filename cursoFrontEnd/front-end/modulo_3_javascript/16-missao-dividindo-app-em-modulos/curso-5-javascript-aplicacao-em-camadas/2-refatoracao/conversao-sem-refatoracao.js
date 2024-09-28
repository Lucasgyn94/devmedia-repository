
let celsius = 40;

let fahrenheit = (celsius * 1.8) + 32;

console.log(`${celsius} º graus celsius equivalem à ${fahrenheit} graus fahrenheit`);

if (fahrenheit >= 99) {
    console.log("Temperatura alta.");
} else {
    console.log("Temperatura normal");
}