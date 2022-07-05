var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [tempo, velocidade] = input.split("\n");

var totalpercorrido = tempo * velocidade;
var Combustivel = totalpercorrido / 12;

console.log (Combustivel.toFixed(3));