var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let Dias = parseInt(input);
let Anos, Meses;
  
Anos = parseInt(Dias / 365);
Dias = Dias % 365

Meses = parseInt(Dias / 30);
Dias = Dias % 30

let resultado = `${Anos} ano(s)
${Meses} mes(es)
${Dias} dia(s)`

console.log(resultado);







