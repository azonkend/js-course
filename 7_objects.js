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

// // // Доступ к св-вам объекта через точку или ['']

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
// console.log(user)

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





























































// 📌 Объекты в JavaScript

//===============================================================================================//
// 🔹 Создание объектов

// 📌 Синтаксис:
const obj1 = {}; // Литерал объекта (предпочтительный способ)
const obj2 = new Object(); // Конструктор объекта (используется редко)

// 📌 Создание объекта с ключами и значениями
const person = {
    name: "Tom",
    age: 30,
};

console.log(person.name); // "Tom"

//===============================================================================================//
// 🔹 Доступ к свойствам объекта

// 📌 Через точку `.`
person.age = 31; // Изменение свойства
console.log(person.age); // 31

// 📌 Через квадратные скобки `[]`
console.log(person["name"]); // "Tom"

const prop = "myKey";
const obj = {
    name: "Tom",
    age: 25,
    interest: "football",
    "his father": "Dan",
    [prop]: "value",
};

console.log(obj["his father"]); // "Dan"
console.log(obj.myKey); // "value"

//===============================================================================================//
// 🔹 Преобразование массива в объект

// 📌 Функция `transformObject` превращает массив в объект, где элемент становится ключом и значением
const transformObject = (arr) => {
    let obj = {};
    arr.forEach((el) => (obj[el] = el));
    return obj;
};

const arr = [1, "text"];
console.log(transformObject(arr)); // { '1': 1, text: 'text' }

//===============================================================================================//
// 🔹 Сравнение объектов

const a = {};
const b = {};
console.log(a === b); // false (разные ссылки)

const c = {};
const d = c;
console.log(c === d); // true (одна ссылка на один и тот же объект)

//===============================================================================================//
// 🔹 Сокращенный синтаксис при создании объектов

const username = "Tom";

const user = {
    username, // аналог `username: username`
};

console.log(user.username); // "Tom"

//===============================================================================================//
// 🔹 Перебор свойств объекта

const userInfo = {
    name: "Tom",
    key: 17,
};

// 📌 Использование `for...in` для перебора свойств
for (let key in userInfo) {
    console.log(userInfo[key]);
}

// 📌 Преобразование объекта в массив значений
const concatProps = (obj) => {
    const arr = [];
    for (let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
};

console.log(concatProps(userInfo)); // ["Tom", 17]

//===============================================================================================//
// 🎯 Итог:
// ✅ Объекты хранят данные в формате "ключ-значение".
// ✅ Можно обращаться к свойствам через `.`, `[]`, а также динамически.
// ✅ Используйте `for...in` для перебора ключей объекта.
// ✅ `transformObject()` помогает создать объект из массива.
