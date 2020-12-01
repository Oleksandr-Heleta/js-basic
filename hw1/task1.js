/*  1. По координатам двух точек, которые вводит пользователь, определить уравнение прямой, проходящей через эти точки.
    Общий вид уравнения: y = kx + b; где k = (y1 - y2) / (x1 - x2), b = y2 - k*x2. */

var y1 = prompt("Please! Enter y1", 0);
var y2 = prompt("Please! Enter y2", 0);
var x1 = prompt("Please! Enter x1", 0);
var x2 = prompt("Please! Enter x2", 0);

console.log("y1=" + y1);
console.log("y2=" + y2);
console.log("x1=" + x1);
console.log("x2=" + x2);

var k = (y1 - y2) / (x1 - x2);
console.log("k=" + k);
var b = y2 - k * x2;
console.log("b=" + b);

console.log("y = " + k + "x + " + b);
document.write("You formula:" + "y = " + k + "x + " + b);