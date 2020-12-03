 
  /*   1. Среди трех чисел найти среднее арифметическое.
        Если среди чисел есть равные, вывести сообщение "Ошибка".
        Числа принять от пользователя. */

var a = +prompt("Please, enter the first number", 0);
var b = +prompt("Please, enter the second number", 0);
var c = +prompt("Please, enter the third number", 0);   

(a === b || a === c || b === c) ? alert("error") : alert((a + b + c) / 3);

    