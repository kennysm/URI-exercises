var input = require('fs').readFileSync('stdin10', 'utf8');
var valores = input.split('\n')

var [toolId, toolNumber, toolUnit] = valores.shift().split(" ");
var [toolId2, toolNumber2, toolUnit2] = valores.shift().split(" ");

var total = toolUnit * toolNumber;
var total2 = toolUnit2 * toolNumber2;

var totalValue = total + total2;

console.log("VALOR A PAGAR: R$ " + totalValue.toFixed(2));