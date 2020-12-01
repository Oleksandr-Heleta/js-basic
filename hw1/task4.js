/* 4. Получить от пользователя данные о пользователе: имя, фамилию, возраст. Обработать их и вывести на экран. */

var userName = prompt('Your name','name');
var userSecondName = prompt('Your second name','second_name');
var userAge = prompt('You age', 'age');

console.log('name =' + userName);
console.log('secondName =' + userSecondName);
console.log('age =' + userAge);

document.write('You are ' + userName + " " + userSecondName + ". " + "You are " + userAge + " years old.");