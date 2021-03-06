
    // 3. Массив watchList содержит объекты с информацией о нескольких фильмах. Используйте reduce, чтобы найти средний рейтинг IMDB фильмов, снятых режиссером Кристофером Ноланом. Вспомните из предыдущих заданий filter и map. Вам может потребоваться создать другие переменные, но сохраните окончательное среднее значение в переменную AverageRating. Обратите внимание, что значения рейтинга сохраняются в виде строк в объекте и должны быть преобразованы в числа, прежде чем они будут использованы в любых математических операциях.

console.log('***********task3*********');

var filtrDirector = watchList.filter(function (item) {
    return item.Director === "Christopher Nolan";
});
var filtrRating = filtrDirector.map(function (item) {
    return item.imdbRating  
});
var AverageRating = filtrRating.reduce(function (sum, current) {
    return sum + Number(current);
}, 0) / filtrRating.length;

console.log(AverageRating);