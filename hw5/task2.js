 /*    
    2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
       Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
       В зависимости от принятого знака операции, вызвать соответствующий метод.
 */
 
var calculator = {
    a: 0,
    b: 0,
    sign: '+',
    result: undefined,
    add: function (a, b) { return calculator.result = a + b },
    sub: function (a, b) { return calculator.result = a - b },
    mul: function (a, b) { return calculator.result = a * b },
    div: function (a, b) { return calculator.result = a / b },
}
 
calculator.a = +prompt('Please, enter the first number');
calculator.sign = prompt('Please, enter the sign +,-,* or /');
calculator.b = +prompt('Please, enter the second number');


switch (calculator.sign) {
            case "+":
                    calculator.add(calculator.a, calculator.b);
                    break;
            case "-":
                    calculator.sub(calculator.a, calculator.b);
                    break;
            case "*":
                    calculator.mul(calculator.a, calculator.b);
                    break;
            case "/":
                    calculator.div(calculator.a, calculator.b);
                    break;
            default:
                alert(calculator.sign + " - is not a math sign.");
}


 if (!Number.isNaN(calculator.a) && !Number.isNaN(calculator.b) && calculator.result != undefined ) {
     alert(calculator.result);
 } else {
    alert("Check you data");
        }
