//  2. Обменять значения двух переменных, используя третью (буферную) переменную.

var a = prompt("Please! Enter a", 1);
var b = prompt("Please! Enter b", 2);
var c;
 
console.log("before exchange");
console.log("a=" + a);
console.log("b=" + b);

c = a;
a = b;
b = c;

console.log("after exchange");
console.log("a=" + a);
console.log("b=" + b);