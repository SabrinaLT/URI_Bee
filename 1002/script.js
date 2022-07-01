var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());
var n = 3.14159;
var area = n * Math.pow(raio, 2);

console.log("A=" + area.toFixed(4));

//parseFloat = Insere o ponto flutuante
//Math.pow = faz raio ao quadrado, caso contrário precisariámos utilizar o comando (raio * raio)
//toFixed vai fixar 4 casas decimais depois do ponto
