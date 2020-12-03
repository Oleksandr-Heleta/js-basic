//  2. Построить прямоугольный треугольник состоящий из символа "*".

var b ="";
var c = "*";
var a = 0;

//  1 вариант

         /* while (a < 10) {               
            // console.log(a);
            a++;
            b += c;
            console.log(b);
           document.write("<br \/> " + b);
        };  */

//  2 вариант

    for (; a <= 10; a++) {
                             b += c;
                            console.log(b);
                            document.write("<br \/> " + b);
    }