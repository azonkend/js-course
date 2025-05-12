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


  











