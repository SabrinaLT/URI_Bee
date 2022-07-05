var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let qtdSegundos = parseInt(input);

let H = parseInt(qtdSegundos / 3600);
qtdSegundos = qtdSegundos % 3600

let M = parseInt(qtdSegundos / 60);
qtdSegundos = qtdSegundos % 60

console.log(`${H}:${M}:${qtdSegundos}`);

/**
 * let qtdSegundos = parseInt(input);
 * 
 * const valores = [3600, 60, 1];
 * const resultado = [];
 * 
 * for (let valor of valores) {
 * resultado.push( parseInt(qtdSegundos / valor) );
 * qtdSegundos = qtdSegundos % valor; 
 * }
 * 
 * console.log(resultado.join(":"));
 */






