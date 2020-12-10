    
/*     3.  Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
        "var computerChoice = Math.random();
        alert(computerChoice);".
        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
 */
  
var youChoise = prompt('Камень Ножницы Бумага?'); 
var computerChoice;
var index = Math.random();

console.log(youChoise);
console.log(index);

if (index < 0.33) {
        computerChoice = 'Камень';  
} else if (index < 0.66) {
        computerChoice = 'Ножницы';
} else {
        computerChoice = 'Бумага';
}


alert("А мой выбор - " + computerChoice);


switch (computerChoice) {
        case 'Камень': if (youChoise === 'Бумага') { alert("ТЫ ПОБЕДИЛ"); }
                        else if (youChoise === 'Ножницы') { alert("ТЫ ПРОИГРАЛ"); }
                                else { alert("НИЧИЯ"); }
                        break;
        case 'Ножницы': if (youChoise === 'Камень') { alert("ТЫ ПОБЕДИЛ"); }
                        else if (youChoise === 'Бумага') { alert("ТЫ ПРОИГРАЛ"); }
                                else { alert("НИЧИЯ"); }
                        break;
        case 'Бумага': if (youChoise === 'Ножницы') { alert("ТЫ ПОБЕДИЛ"); }
                        else if (youChoise === 'Камень') { alert("ТЫ ПРОИГРАЛ"); }
                                else { alert("НИЧИЯ"); }
                        break;
        default: alert("НЕВЕРНО ВВЕЛИ ЗНАЧЕНИЕ");
}


