var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vendedor = String(lines.shift())
var salario = parseFloat(lines.shift())
var vendas = parseFloat(lines.shift())

var total = (15 / 100 * vendas) + salario;


console.log ("TOTAL = R$ " + total.toFixed(2));