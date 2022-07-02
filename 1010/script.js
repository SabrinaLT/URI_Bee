var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines.shift().split(" ");
var linha2 = lines.shift().split(" ");
/*Split serve para separar cada valor da linha, o espaço dentro do parentes
representa cada espaço entre os numeros*/

var item1 = linha1.shift();
var item2 = linha2.shift();

var quantidade1 = linha1.shift();
var quantidade2 = linha2.shift();

var valorU1 = linha1.shift();
var valorU2 = linha2.shift();

var valorT1 = quantidade1 * valorU1;
var valorT2 = quantidade2 * valorU2;

var total = (valorT1 + valorT2);


console.log ("VALOR A PAGAR: R$ " + total.toFixed(2));