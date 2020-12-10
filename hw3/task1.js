//  1. Сделать собственные примеры методов применяемых для массивов.

var it = [];

// push
it.push('html', 'css', 'js');
console.log("Новый масив ");
console.log(it);

// pop
var target = it.pop();
console.log("Удаленный последний елемент " + target);
console.log(it.length);

// unshift
it.unshift(target);
console.log(it);

// shift
var nowLearn = it.shift();
console.log("Удаленный первый елемент " + nowLearn);
console.log(it.length);

// spice
var del = it.splice(0, 2, 'js', 'java', 'php');
console.log("Удалены: " + del);
console.log("Теперь: " + it);

// sort
it.sort();
console.log("Елементы масива в алфавитном порядке " + it);
console.log(it);

// reverse
it = it.reverse();
console.log("Елементы масива в обратном порядке " + it);
console.log(it);

// concat
var firstLang = ['html', 'css'];
var allLang = it.concat(firstLang);
console.log("Соедененные масивы ");
console.log(allLang);

// join
var string = allLang.join(' ');
console.log("Масив превращен в строку " + string);

// split
var endArr = string.split(" ");
console.log("Строка превращена в масив ");
console.log(endArr);

// slice
var rang = endArr.slice(0, 3);
console.log('Выбор елементов');
console.log(rang);