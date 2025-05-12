// Объекты

//===============================================================================================//

// Синтаксис
/* 
    const obj = {}
    const newObj = new Object() // редко используется

    const person = {
    // ключ: значение
        name: 'Tom',
        age: 30,
    }
*/

//===============================================================================================//

// const prop = 'my'

// const obj = {
//     name: 'Tom',
//     age: 25,
//     interest: 'football',
//     'his father': 'Dan',
//     [prop + 'name']: 'value'
// }

// // Доступ к св-вам объекта через точку или ['']

// console.log(obj.age) // 25
// obj.age = 28
// console.log(obj.age) // 28
// console.log(obj['his father']) // Dan
// console.log(obj[prop + 'name'])


// transformObject
// [1, 'text'] => { '1': 1, text: 'text' }

/* 
    const transformObject = arr => {
        let obj = {}

        arr.forEach(el => obj[el] = el)

        return obj
    }

    const arr = [1, 'text']
    const result = transformObject(arr)
    console.log(result) // { '1': 1, text: 'text' }
 */

// const a = {}
// const b = {}
// console.log(a === b) // false (разные ссылки)

// const a = {}
// const b = a
// console.log(a === b) // true (ссылка на один и тот же объект)

// const name = 'Tom'

// const user = {
//     // name: name
//     name 
// }

//===============================================================================================//

// Цикл для объектов

// const user = {
//     name: 'Tom',
//     key: 17
// }

// for (let key in user) {
//     console.log(user[key])
// }


// user => ['Tom', 17]

/* 
    const user = {
        name: 'Tom',
        key: 17
    }

    const concatProps = obj => {
        const arr = []

        for (let key in obj) {
            arr.push(obj[key])
            // arr = arr.concat(obj[key]) // при let arr, тк метод возвращает новый массив
        }

        return arr
    }

    console.log(concatProps(user)) // [ 'Tom', 17 ]
*/