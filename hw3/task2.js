//  2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.


var cars = ["Opel", "Peugeot", "Audi", "Ford"];
var carInArr = prompt('Введите название авто, после которого хотите вставить свой автомобиль. Уже есть ' + cars);
var newCar = prompt('Введите свой автомобиль');


console.log(cars);
console.log("car in Arr - " + carInArr);

var index = cars.indexOf(carInArr) + 1;  // При отмене  или неверном значении будет вводить первым
console.log("index - " + index);   
cars.splice(index, 0, newCar);
console.log("arr - " + cars);


alert("Новая Перечень авто: " + cars);