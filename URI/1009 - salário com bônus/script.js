var input = require('fs').readFileSync('stdin9', 'utf8');
var valores = input.split('\n')

var seller = valores.shift();
var sellerSalary = parseFloat(valores.shift());
var monthSales = parseFloat(valores.shift());

var comission = monthSales * 0.15;
var totalSalary = comission + sellerSalary;

console.log("TOTAL = R$ " + totalSalary.toFixed(2));