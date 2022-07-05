var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var funcionario = parseInt(lines.shift())
var horast = parseInt(lines.shift())
var valorh = parseFloat(lines.shift())

var salario = (horast * valorh);


console.log ("NUMBER = " + funcionario + '\n' + "SALARY = U$ " + salario.toFixed(2));