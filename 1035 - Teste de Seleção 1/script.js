var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const ABCD = lines.shift().split(" ");

var A = parseInt(ABCD.shift());
var B = parseInt(ABCD.shift());
var C = parseInt(ABCD.shift());
var D = parseInt(ABCD.shift());


if (B > C && D > A && C + D > A + B && C > 0 & D > 0 && A % 2 === 0) {
    console.log ("Valores aceitos");
} else {
    console.log ("Valores nao aceitos");
}

//Para saber se o número é positivo basta verificar se ele é maior que zero
//Para saber se o número é par basta dividí-lo por 2 e verificar se o resultado é zero (N % 2 == 0)