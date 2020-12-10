 /*  1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
       Функция должна расчитывать результат операции, исходя из переданного ей знака. 
       Функция должна проверять корректность введенных чисел и знака операции.
       Все аргументы для функции принять от пользователя.
 */
  
        function add(a, b) {
            return a + b;
        }

        function sub(a, b) {
            return a - b;
        }

        function mul(a, b) {
            return a * b;
        }

        function div(a, b) {
            return a / b;
        }

        var operand1 = +prompt("Введите первое число: ");
        var sign = prompt("Введите знак арифметической операции: + - * /");
        var operand2 = +prompt("Введите второе число: ");
        var result;
        
        console.log("Первое число " + operand1);
        console.log("Тип первого числа " + typeof operand1);
        
        console.log("Второе число " + operand2);
        console.log("Тип второго числа " + typeof operand2);
        
        console.log("Знак арифметической операции " + sign);
        console.log("Тип знака арифметической операции " + typeof sign);

        switch (sign) {
            case "+":
                result = add(operand1, operand2);
                break;
            case "-":
                result = sub(operand1, operand2);
                break;
            case "*":
                result = mul(operand1, operand2);
                break;
            case "/":
                result = div(operand1, operand2);
                break;
            default:
                document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.</p>");
        }

        if (!Number.isNaN(operand1) && !Number.isNaN(operand1) && result != undefined ) {
            document.write("Результат операции: " + result);
            console.log("Результат операции: " + result);
        } else {
            document.write("<p><b style='color:red'> Проверьте введенные значения </b></p>");
        }