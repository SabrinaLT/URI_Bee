var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var minutos = (60 * lines) / 30;

console.log (minutos + " minutos");

// console.log((input * 2) + " minutos")