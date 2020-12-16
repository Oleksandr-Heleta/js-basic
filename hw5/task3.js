 /* 
3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
   содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
   Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.
  */   
   
var staff = [];

while (confirm('Do you want to add new employee?')) {
    // Запрашуем инфо о сотруднике
    var fName = prompt('Enter first name');
    var sName = prompt('Enter second name');
    var age = +prompt('Enter age');
    var occupation = prompt('Enter occupation');
    
    // Добавляем сотрудника в список(масив)
    staff.push({
        name: fName,
        sName: sName,
        age: age,
        occupation: occupation,
        show: function () {
            document.write("<p>Occupation: " + this.occupation +
                            "; First name: " + this.name +
                            "; Second name: " + this.sName +
                            "; Age: " + this.age + " years old.</p>");
            
                console.log("Occupation: " + this.occupation +
                            "; First name: " + this.name +
                            "; Second name: " + this.sName +
                            "; Age: " + this.age + " years old.");
                },
            })
}

console.log(staff);

// Выводим список на екран
if (confirm('Do you want to look through the list?')) {
    for (var i = 0; i < staff.length; i++){
        staff[i].show();
    }
}