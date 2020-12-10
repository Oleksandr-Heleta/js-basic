    // 4. Создать два произвольных массива: один массив - любимая спортивная команда / модели автомобилей / города, во втором - количество игроков в команде / объем двигателя / количество жителей в городе. Объединить данные из двух массивов и вывести их в одну строку. 

var mainArr = [];    
var firstArr = ['Shakhtar', 'Peugeot', 'Lviv'];
var secondArr = ['11', '1.6 hdi', '721k'];

for (var i = 0; i < firstArr.length; i++) {
    mainArr.push(firstArr[i]);
    mainArr.push(secondArr[i]);
}

console.log( mainArr );
var mainString = mainArr.join(' ');
console.log( mainString );