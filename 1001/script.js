var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
/*var input... = comando para conseguir ler o arquivo stdin
var lines... = comando irá receber um array com os dados que inserirmos no stdin,
o \n irá validar o número que consta em cada linha.*/

var A = parseInt(lines.shift()) 
var B = parseInt(lines.shift())
//shift = vai pegar sempre a primeira posição do array
/*parseInt = transforma o arrey em inteiro, sem esse comando o valor 1 + 1 será concatenado, ou seja,
retornará o valor 11, já com o parseInt ele irá somar 1+1*/


var X = A + B

console.log("X = " + X)
//console.log = mostra o resultado na tela
/* console.log('X = ${X}') também pode ser feito dessa forma. Dessa maneira você concatena
uma string com a variável que estará dentro da chave, que nesse caso é o X*/





