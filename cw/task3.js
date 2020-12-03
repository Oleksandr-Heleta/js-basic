/* Task 3:
            Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
            «Включительно» означает, что значение переменной age может быть равно 14 или 90. 
            Значение вводит пользователь */

var age = +prompt("Please, enter your age", 0);
if (age >= 14 && age <= 90) {
    console.log(age + " is true");
    alert("You can watch this film");
} else {
    console.log(age + " is false");
    alert("You can\'t watch this film");
}