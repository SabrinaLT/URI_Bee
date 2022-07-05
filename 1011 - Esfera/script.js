var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var PI = 3.14159
var R = parseFloat(lines.shift())
var volumeEsfera = (4/3.0) * PI * Math.pow(R, 3)

console.log ("VOLUME = " + volumeEsfera.toFixed(3));