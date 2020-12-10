 /* 
    2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
  */   
   
var number = +prompt('Введите число');
var exponent = +prompt('Введите степень числа');
var result;

function doExponent(number, exponent) {
                  return result = number ** exponent;
}

console.log(doExponent(number, exponent));
alert(number + " в " + exponent + " степени ровняеться: " + result);
