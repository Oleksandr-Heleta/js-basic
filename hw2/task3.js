//  3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var a = +prompt("Please, enter the first number", 0);
var b = +prompt("Please, enter the second number", 0);
var c = +prompt("Please, enter the third number", 0);  

if (a > b && a > c) {
    alert("Max = " + a);
} else {
    if (b > a && b > c) {
        alert("Max = " + b);
    } else alert("Max = " + c);
}