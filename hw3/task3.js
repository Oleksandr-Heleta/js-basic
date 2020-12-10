    // 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. Размер каждого вложенного массива - 3.

var index = +prompt('Введите размер массива', 1);
var myArr = [];
var oddArr = ['odd', 'odd', 'odd'];
var evenArr = ['even', 'even', 'even'];

for (var i = 0; i <= index; i++) {
    if (i % 2 === 0) 
        myArr[i] = oddArr;
        else  myArr[i] = evenArr; 
}
console.log(myArr);