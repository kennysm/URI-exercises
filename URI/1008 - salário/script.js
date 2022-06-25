var input = require('fs').readFileSync('stdin8', 'utf8');
var valores = input.split('\n')

var employeeId = parseInt(valores.shift());
var workedHours = parseInt(valores.shift()); ''
var salaryPerHour = parseInt(valores.shift());

var salaryCalc = workedHours * salaryPerHour;

console.log("NUMBER = " + employeeId);
console.log("SALARY = U$ " + salaryCalc.toFixed(2));