//  2. Массив watchList содержит объекты с информацией о нескольких фильмах. Используйте filter и map для возврата нового массива объектов только с title и rating, но где imdbRating больше или равен 8.0.


console.log('*********** task2 ***********');

var filteredList = watchList.filter(function(item) {
                    return Number(item.imdbRating) > 8;
}).map(function(item) {
                    return {
                            "Title": item.Title,
                            "imdbRating": item.imdbRating
                        }
});

        console.log(filteredList); 
