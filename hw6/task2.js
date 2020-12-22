      // 2. Завершите написание функции getArrayOfUsers, чтобы она возвращала массив, содержащий все свойства объекта, который он получает в качестве аргумента.

        let users = {
            Alan: {
                age: 27,
                online: false
            },
            Jeff: {
                age: 32,
                online: true
            },
            Sarah: {
                age: 48,
                online: false
            },
            Ryan: {
                age: 19,
                online: true
            }
        };

// ОЧЕНЬ СЛОЖНЫЙ ВАРИАНТ (должен быть проще)


    /*     function getArrayOfUsers(obj) {
            var allUsers=[];

            // allUsers = Array.from(obj);
            // allUsers = Object.values(obj);   
            // allUsers = Object.keys(obj);
            allUsers = Object.entries(obj);

                    
            var result = [];
             for (var i =0; i < allUsers.length; i++){
                 var datum = Object.values(allUsers[i][1]);
                 
                 result.push(allUsers[i][0]);
                //  result.push(datum);  - если нужно оставить вложений обект в качестве вложеного масива
                result.push(datum[0]);
                result.push(datum[1]);
             }   
            
            console.log(result);
            return result;

        }
 */

// Спасибо ментору:

        function getArrayOfUsers(obj) {
            var allUsers = [];
            for (var name in obj) {
                allUsers.push(name);
                for (var prop in obj[name]) {
                    allUsers.push(prop)
                }
            }
            return allUsers;
        }

        console.log(getArrayOfUsers(users));