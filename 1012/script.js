var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var PI = 3.14159
var [A, B, C] = input.split(" ");

var TRIANGULO = (A * C) / 2.0;
var CIRCULO = PI * Math.pow(C, 2);
var TRAPEZIO = ((parseFloat(A) + parseFloat(B)) * C) / 2;
var QUADRADO = B * B;
var RETANGULO = A * B;


console.log ("TRIANGULO: " + TRIANGULO.toFixed(3));
console.log ("CIRCULO: " + CIRCULO.toFixed(3));
console.log ("TRAPEZIO: " + TRAPEZIO.toFixed(3));
console.log ("QUADRADO: " + QUADRADO.toFixed(3));
console.log ("RETANGULO: " + RETANGULO.toFixed(3));