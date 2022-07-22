var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const ABC = lines.shift().split(" ");

var A = parseFloat(ABC.shift());
var B = parseFloat(ABC.shift());
var C = parseFloat(ABC.shift());
var Delta = (B * B) - 4 * A * C;

var R1 = (-B + Math.sqrt(Delta)) / (2 * A);
var R2 = (-B - Math.sqrt(Delta)) / (2 * A);


if ((2 * A) === 0) {
    console.log ("Impossivel calcular");
}

else {
    const D = (B * B) - 4 * A * C;

if (D > 0) {
    console.log ("R1 = " + R1.toFixed(5) + '\n' + "R2 = " + R2.toFixed(5));
}
else {
    console.log ("Impossivel calcular");
}

}