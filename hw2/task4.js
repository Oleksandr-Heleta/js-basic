/* 4. Дано два числа A и B где (A<B). 
    Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
    Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.   
 */

var a = +prompt("Please, enter the first number", 0);
var b = +prompt("Please, enter the second number", 0);

var e=0;

//  Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.

        for (var i = a+1; i <= b; i++) {
            if (i == b) {
                 console.log("сумa чисел расположенных в числовом промежутке " + e); 
                 document.write ("сумa чисел расположенных в числовом промежутке " + e)
                break;
            }
            else {
                e +=i;
            }
        }

//  Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В. 

        for (var i = a+1; i <= b; i++) {
            if (i == b) {
                 console.log("На екране все нечетные значения, расположенные в числовом промежутке от "+a+" до " +b); 
                document.write ("<br \/>  На екране все нечетные значения, расположенные в числовом промежутке от "+a+" до " +b)
                break;
            }
            else {
                    if (i % 2 === 1) {
                            console.log(i);
                            document.write("<br \/> " + i);
                    }
            }
        }