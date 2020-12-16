 /* 
    4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
       будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
       Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
           • "director" — 3000;
           • "manager" — 1500;
           • "programmer" — 2000;
           • для остальных значений — 1000.
       После выполнения функции — вывести информацию о сотрудниках.
   */

function getSalary(staff) {
    for (var j = 0; j < staff.length; j++) {
       
    // Сортируем salary по occupation
        switch (staff[j].occupation) {
            case "director": staff[j].salary = 3000;
                            break;
            case "manager": staff[j].salary = 1500;
                            break;
            case "programmer": staff[j].salary = 2000;
                            break;
            default: staff[j].salary = 1000;
        }

    // Добавляем в show позицию salary
        staff[j].show = function() {
            document.write("<p>Occupation: " + this.occupation +
                            "; First name: " + this.name +
                            "; Second name: " + this.sName +
                            "; Age: " + this.age + " years old;" + 
                            "; Salary: " + this.salary + ".</p > ");
                        };
    // Выводим лист
        staff[j].show();
    }
}
   
getSalary(staff);
