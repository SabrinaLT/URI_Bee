var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(input);

console.log("NOTAS:");

let qtdNotas = parseInt(valor / 100);
console.log (qtdNotas + " nota(s) de R$ 100.00");
valor = valor % 100;

qtdNotas = parseInt(valor / 50);
console.log (qtdNotas + " nota(s) de R$ 50.00");
valor = valor % 50;

qtdNotas = parseInt(valor / 20);
console.log (qtdNotas + " nota(s) de R$ 20.00");
valor = valor % 20;

qtdNotas = parseInt(valor / 10);
console.log (qtdNotas + " nota(s) de R$ 10.00");
valor = valor % 10;

qtdNotas = parseInt(valor / 5);
console.log (qtdNotas + " nota(s) de R$ 5.00");
valor = valor % 5;

qtdNotas = parseInt(valor / 2);
console.log (qtdNotas + " nota(s) de R$ 2.00");
valor = valor % 2;

valor = valor * 100

console.log("MOEDAS:");

let qtdMoedas = parseInt(valor / 1);
console.log (qtdMoedas + " moeda(s) de R$ 1.00");
valor = valor % 1;

qtdMoedas = parseInt(valor / 0,50);
console.log (qtdMoedas + " moeda(s) de R$ 0.50");
valor = valor % 0,50;

qtdMoedas = parseInt(valor / 0,25);
console.log (qtdMoedas + " moeda(s) de R$ 0.25");
valor = valor % 0,25;

qtdMoedas = parseInt(valor / 0,10);
console.log (qtdMoedas + " moeda(s) de R$ 0.10");
valor = valor % 0,10;

qtdMoedas = parseInt(valor / 0,05);
console.log (qtdMoedas + " moeda(s) de R$ 0.05");
valor = valor % 0,05;

qtdMoedas = parseInt(valor / 0,01);
console.log (qtdMoedas + " moeda(s) de R$ 0.01");
valor = valor % 0,01;




