//  2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.

// Не для ІТ-шников
var somArr = new Array();
var index = +prompt('Введите значение елемента, после которого хотите вставить свой елемент', 0);
var item = prompt('Введите свой елемент', 0);
if (index > 0) {
    somArr[index] = item;
    console.log(somArr);
} else {
    somArr.push(item);
    console.log(somArr);
}
    
// Для ІТ-шников
/* var somArr = new Array();
var index = +prompt('Введите значение елемента, после которого хотите вставить свой елемент', -1);
var item = prompt('Введите свой елемент', 0);

somArr[index + 1] = item;
console.log(somArr); */
