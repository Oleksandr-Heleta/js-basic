 /* 
    5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
       Параметр для сортировки принимается от пользователя.
       После выполнения функции — вывести информацию о сотрудниках.
 */
 
function sort(property) {
      
   // Запрашуем свойство по котором сортировать
      var property = prompt('Please, enter property to sort');
      document.write('Sort by ' + property);

   // Сортировка
      if (property === "age" || property === "salary") {
         // staff.sort((a, b) => a[property] > b[property] ? 1 : -1);
         staff.sort(function (a, b) { return a[property] - b[property]; });
      } else staff.sort((a, b) => a[property] > b[property] ? 1 : -1);

   // Вывод листа
      for (var i = 0; i < staff.length; i++){
         staff[i].show();
      }
   }

sort();