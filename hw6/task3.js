 // 3. Допишите функцию countOnline; используйте оператор for ... in в этой функции для циклического обхода пользователей в объекте users и возврата количества пользователей, для которых для свойства онлайн установлено значение true.

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

       /*  function countOnline(obj) {
            var count = 0;
            var name = Object.keys(obj);
            for (var i = 0; i <name.length; i++) {
                if (obj[name[i]]['online'] === true) { count +=1;}
            };
            return count;
        } */

function countOnline(obj) {
            var count = 0;
            for (var test in obj) {
                // console.log(obj[test]);
                if (obj[test]['online'] === true) { count += 1;}
            }
            return count;
        }


        console.log(countOnline(users))