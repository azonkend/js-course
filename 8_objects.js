// Методы объектов

/* 
    Object.keys()
    Object.values()
    Object.entries()
    Object.assign()
*/

// const user = {
//     name: 'Tom',
//     age: 17,
// }

// console.log(Object.keys(user)) // [ 'name', 'key' ]
// console.log(Object.values(user)) // [ 'Tom', 17 ]
// console.log(Object.entries(user)) // [ [ 'name', 'Tom' ], [ 'key', 17 ] ]

//===============================================================================================//

// const users = {
//     'Tom': 17,
//     'John': 18,
//     'Bob': 19,
// }

// const getAdults = usersObj => {
//     // {'Tom': 17, 'John': 18, 'Bob': 19,} => [ [ 'Tom', 17 ], [ 'John', 18 ], [ 'Bob', 19 ] ]
//     const usersArray = Object.entries(users)
//     // [ [ 'Tom', 17 ], [ 'John', 18 ], [ 'Bob', 19 ] ] => [ [ 'John', 18 ], [ 'Bob', 19 ] ]
//     const filteredUsersArray = usersArray
//         .filter(user => user[1] >= 18)
//     // [ [ 'John', 18 ], [ 'Bob', 19 ] ] => [ 'John', 'Bob' ]
//     const usersNames = filteredUsersArray
//         .map(user => user[0])

//     return usersNames
// }

// console.log(getAdults(users))


// const getAdults = userObj => Object.entries(users)
//     .filter(user => user[1] >= 18)
//     .map(user => user[0])

// console.log(getAdults(users))

//===============================================================================================//

// const user = {
//     name: 'Tom',
//     age: 17,
// }

// const concatProps = obj => Object.values(obj)

// console.log(concatProps(user))

//===============================================================================================//

// Copy obj

// const users = {
//     'Tom': 18,
// } 

// const players = {
//     'John': 18,
//     'Bob': 19,
// }

// const res = Object.assign(users, players) 
// console.log(res) // { Tom: 18, John: 18, Bob: 19 }
 


// const users = {
//     'Tom': 17,
//     'Bob': 100,
// }

// const players = {
//     'John': 19,
//     'Bob': 18
// }

// const copyObj = obj => Object.assign({}, obj) 
// console.log(copyObj(players))


// С помошью оператора ... (копирует только на верхнем уровне)


// const user = {
//     name: 'Tom',
//     key: 17
// }

// const player = { ...user }

// console.log(player === user)


// const user = {
//     name: 'Tom',
//     key: 17,
    
//     parents: { // не копируются
//         mother: 'Lisa',
//         father: 'Bob'
//     }
// }

// const player = { ...user }

// console.log(player)

//===============================================================================================//

// Деструктуризация

/*
Деструктуризация объектов в JavaScript позволяет извлекать значения из объектов и 
присваивать их переменным в удобной форме.
*/

// Базовая диструктуризация

// При деструктуризации объекта создаются переменные с именами, совпадающими с ключами объекта.
// const user = { 
//     name: 'Alice', 
//     age: 25, 
//     city: 'Wonderland' 
// }

// const { name, age, city } = user

// console.log(name); // 'Alice'
// console.log(age);  // 25
// console.log(city); // 'Wonderland'

// Присваивание новым переменным

// Можно присваивать значения из объекта переменным с другими именами
// const user = { name: 'Alice', age: 25, city: 'Wonderland' };
// const { name: userName, age: userAge, city: userCity } = user;

// console.log(userName); // 'Alice'
// console.log(userAge);  // 25
// console.log(userCity); // 'Wonderland'

// Деструктуризация с значениями по умолчанию

// Если ключ отсутствует в объекте, можно задать значение по умолчанию.
// const user = { name: 'Alice', age: 25 };
// const { name, age, city = 'Unknown' } = user;

// console.log(name); // 'Alice'
// console.log(age);  // 25
// console.log(city); // 'Unknown'

// Вложенная деструктуризация

// Можно деструктурировать вложенные объекты.
// const user = {
//     name: 'Alice',
//     address: {
//       city: 'Wonderland',
//       street: 'Rabbit Hole'
//     }
// };
  
// const { name, address: { city, street } } = user;
  
// console.log(name);   // 'Alice'
// console.log(city);   // 'Wonderland'
// console.log(street); // 'Rabbit Hole'

// Деструктуризация с оставшимися свойствами (rest)

// Оставшиеся свойства можно собрать в отдельный объект.
// const user = { 
//   name: 'Alice', 
//   age: 25, 
//   city: 'Wonderland' 
// };

// const { name, ...rest } = user;

// console.log(name); // 'Alice'
// console.log(rest); // { age: 25, city: 'Wonderland' }

// Деструктуризация в параметрах функции
// Деструктуризация может быть использована прямо в параметрах функции.

// const printUser = ({ name, age }) => {
//   console.log(`Name: ${name}, Age: ${age}`);
// };

// const user = { 
//   name: 'Alice', 
//   age: 25 
// };
// printUser(user); // 'Name: Alice, Age: 25'


  

















































































// 📌 Методы объектов

//===============================================================================================//
// 🔹 Основные методы работы с объектами

/*
    Object.keys()   // Возвращает массив ключей объекта.
    Object.values() // Возвращает массив значений объекта.
    Object.entries()// Возвращает массив пар [ключ, значение].
    Object.assign() // Копирует свойства из одного объекта в другой.
*/

// 📌 Примеры:
const user = {
    name: "Tom",
    age: 17,
};

console.log(Object.keys(user));   // ["name", "age"]
console.log(Object.values(user)); // ["Tom", 17]
console.log(Object.entries(user)); // [["name", "Tom"], ["age", 17]]

//===============================================================================================//
// 🔹 Применение Object.entries() для фильтрации данных

const users = {
    Tom: 17,
    John: 18,
    Bob: 19,
};

// 📌 Фильтрация совершеннолетних пользователей
const getAdults = (usersObj) => Object.entries(usersObj)
    .filter(([_, age]) => age >= 18)
    .map(([name]) => name);

console.log(getAdults(users)); // ["John", "Bob"]

//===============================================================================================//
// 🔹 Использование Object.values() для извлечения значений

const concatProps = (obj) => Object.values(obj);
console.log(concatProps(user)); // ["Tom", 17]

//===============================================================================================//
// 🔹 Копирование объектов

const users1 = { Tom: 18 };
const players1 = { John: 18, Bob: 19 };

// 📌 Копирование объектов с помощью Object.assign()
const combinedUsers = Object.assign(users1, players1);
console.log(combinedUsers); // { Tom: 18, John: 18, Bob: 19 }

// 📌 Создание копии объекта
const copyObj = (obj) => Object.assign({}, obj);
console.log(copyObj(players1)); // { John: 18, Bob: 19 }

// 📌 Копирование объекта с помощью оператора `...` (только верхний уровень)
const user1 = { name: "Tom", age: 17 };
const player1 = { ...user1 };
console.log(player1); // { name: "Tom", age: 17 }

// 📌 Вложенные объекты НЕ копируются глубоко!
const user2 = {
    name: "Tom",
    age: 17,
    parents: { mother: "Lisa", father: "Bob" },
};

const shallowCopy = { ...user2 };
console.log(shallowCopy.parents === user2.parents); // true (ссылка на тот же объект)

//===============================================================================================//
// 🔹 Деструктуризация объектов

/*
Деструктуризация позволяет извлекать значения из объектов и присваивать их переменным.
*/

// 📌 Базовая деструктуризация
const user3 = { name: "Alice", age: 25, city: "Wonderland" };
const { name, age, city } = user3;
console.log(name); // "Alice"
console.log(age);  // 25
console.log(city); // "Wonderland"

// 📌 Присваивание новым переменным
const { name: userName, age: userAge } = user3;
console.log(userName); // "Alice"
console.log(userAge);  // 25

// 📌 Деструктуризация с значениями по умолчанию
const { country = "Unknown" } = user3;
console.log(country); // "Unknown"

// 📌 Вложенная деструктуризация
const user4 = {
    name: "Alice",
    address: {
        city: "Wonderland",
        street: "Rabbit Hole",
    },
};

const { name: firstName, address: { city: userCity, street } } = user4;
console.log(firstName); // "Alice"
console.log(userCity);  // "Wonderland"

// 📌 Оставшиеся свойства (Rest)
const { name: username, ...rest } = user3;
console.log(rest); // { age: 25, city: "Wonderland" }

// 📌 Деструктуризация в параметрах функции
const printUser = ({ name, age }) => console.log(`Name: ${name}, Age: ${age}`);
printUser(user3); // "Name: Alice, Age: 25"

//===============================================================================================//
// 🎯 Итог:
// ✅ `Object.keys()`, `Object.values()`, `Object.entries()` помогают работать с объектами.
// ✅ `Object.assign()` и оператор `...` копируют объекты (но не глубоко).
// ✅ Деструктуризация удобна для извлечения данных.
// ✅ Используйте `Rest` для работы с оставшимися свойствами объекта.
