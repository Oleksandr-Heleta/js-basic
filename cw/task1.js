/* Task 1:
            Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
            1, если значение больше нуля,
            -1, если значение меньше нуля,
            0, если значение равно нулю.
            Предполагается, что пользователь вводит только числа. */

var a = prompt("Please, enter a number", 0);

if (a > 0) {
    console.log(a);
    alert("1");
} else {
    if (a < 0) {
    console.log(a);
    alert("-1");
    } else {
         console.log(a);
         alert("0");
    }
}
