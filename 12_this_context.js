// Контекст выполнения

// Объект пользователя
// let user = {
//     name: "John",
//     age: 30,
//     // короткая запись метода объекта
//     sayHi() {
//         console.log('Hello')
//     }
// }

// user.sayHi = function() {
//     console.log(`Hello`)
// }

// user.sayHi()

//===============================================================================================//

// Ключевое слово «this» в методах

/* 
    Как правило, методу объекта обычно требуется доступ к информации, хранящейся в объекте, для 
    выполнения своей работы.

    Например, коду внутри user.sayHi() может потребоваться имя пользователя, которое хранится в 
    объекте user.

    Для доступа к информации внутри объекта метод может использовать ключевое слово this.

    Значение this – это объект «перед точкой», который используется для вызова метода.
*/

// let user = {
//     name: "John",
//     age: 30,
//     sayHi() {
//       // "this" - это "текущий объект".
//       console.log(this.name);
//     }
// };
  
// user.sayHi(); // John

/* 
    Технически также возможно получить доступ к объекту без ключевого слова this, обратившись к 
    нему через внешнюю переменную (в которой хранится ссылка на этот объект):

    let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name); // "user" вместо "this"
    }

    };
    …Но такой код ненадёжен. Если мы решим скопировать ссылку на объект user в другую переменную, например, admin = user, 
    и перезапишем переменную user чем-то другим, тогда будет осуществлён доступ к неправильному объекту при вызове метода из admin.

    Это показано ниже:

    let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert( user.name ); // приведёт к ошибке
    }

    };

    let admin = user;
    user = null; // перезапишем переменную для наглядности, теперь она не хранит ссылку на объект.

    admin.sayHi(); // TypeError: Cannot read property 'name' of null
    Если бы мы использовали this.name вместо user.name внутри alert, тогда этот код бы сработал.
*/

//===============================================================================================//
// Потеря контекста

// const obj = {
//     number1: 17,
//     number2: 18,
//     getNumber() {
//         console.log(`${this.number1} ${this.number2}`)
//     }
// }

// obj.getNumber() // 17 18

// const func = obj.getNumber

// func() // undefined undefined


//===============================================================================================//
// Метод .bind()

/* 
    Метод .bind() возвращает функцию и жёстко привязывает контекст к функции
*/

// const obj = {
//     number1: 17,
//     number2: 18,
//     getNumber() {
//         console.log(`${this.number1} ${this.number2}`)
//     }
// }

// obj.getNumber() // 17 18
// const func = obj.getNumber.bind(obj)
// func() // 17 18


// const obj = {
//     number: 17,
//     getNumber() {
//         console.log(this.number)
//     }
// }

// obj.getNumber() // 17
// const func = obj.getNumber.bind({ number: 20 })
// func() // 20

// Поменять контекст больше нельзя

//===============================================================================================//
// Метод .call()

// const obj = {
//     number: 17,
//     getNumber() {
//         console.log(this.number)
//     }
// }

// obj.getNumber() // 17

// const func = obj.getNumber

// func.call({ number: 20 }) // 20

//===============================================================================================//
// Метод .apply()

// const user = {
//     name: 'John',
//     sayHi(age, message) {
//         console.log(`${message}. I'm ${this.name}. I'm ${age} years old`)
//     }
// }

// const func = user.sayHi

// func.apply({ name: 'Tom' }, [17, 'Hello']) 



//===============================================================================================//
// Прототип
/* 
    - [[Prototype]] - скрытое свойство, которое содержит ссылку на прототип
    - prototype - свойство у конструктора, которое формирует прототип для объекта, 
      созданного через new
    - __proto__ - getter / setter для [[Prototype]]
*/

// Цепочка прототипов
// Прототип используется как хранилие для разных методов и свойств, которыми могут пользоваться 
// Другие объекты 

// Первый метод (не лучшая практика)
// const vehicle = {
//     move() {
//         console.log('moving')
//     },
//     stop() {
//         console.log('stopped')
//     },
// }

// const ship = {
//     name: 'Aurora',
//     hasWheels: false,
//     liftAnchorUp() {
//         console.log('lifting anchor up')
//     },
//     liftAnchorDown() {
//         console.log('lifting anchor down')
//     },
        // Свойство является геттером и сеттером для внутриннего св-ва [Prototype]   
//     __proto__: vehicle // ship унаследовал методы от vehicle
// }
// ship.liftAnchorUp() // lifting anchor up
// ship.liftAnchorDown() // lifting anchor down
// ship.move() // moving - наследованный метод
// ship.stop() // stopped - наследованный метод



// Второй метод
// const vehicle = {
//     move() {
//         console.log('moving')
//     },
//     stop() {
//         console.log('stopped')
//     },
// }

// const ship = {
//     name: 'Aurora',
//     hasWheels: false,
//     liftAnchorUp() {
//         console.log('lifting anchor up')
//     },
//     liftAnchorDown() {
//         console.log('lifting anchor down')
//     },
// }
// // Метод setPrototypeOf в JavaScript позволяет установить или изменить прототип указанному объекту.
// // Синтаксис: Object.setPrototypeOf(obj, proto)
// Object.setPrototypeOf(ship, vehicle) 
// ship.move() // moving



// const vehicle = {
//     move() {
//         console.log(`${this.name} moving`)
//     },
//     stop() {
//         console.log(`${this.name} stopped`)
//     },
// }

// const ship = {
//     name: 'Aurora',
//     hasWheels: false,
//     liftAnchorUp() {
//         console.log('lifting anchor up')
//     },
//     liftAnchorDown() {
//         console.log('lifting anchor down')
//     },
// }

// Object.setPrototypeOf(ship, vehicle) 
// ship.move() // Aurora moving



// Собственное свойство, объявленное непосредственно в объекте, а не унаследованное по цепочке прототиповю
// const vehicle = {
//     isMoving: false,
//     move() {
//         console.log(`${this.name} moving`)
//     },
//     stop() {
//         console.log(`${this.name} stopped`)
//     },
// }

// const ship = {
//     name: 'Aurora',
//     hasWheels: false,
//     liftAnchorUp() {
//         console.log('lifting anchor up')
//     },
//     liftAnchorDown() {
//         console.log('lifting anchor down')
//     },
// }

// Object.setPrototypeOf(ship, vehicle) 

// Вывод только собственных свойств
// for(let prop in ship) {
//     if(ship.hasOwnProperty(prop)) {
//         console.log(prop)
//     } 
// }

// Другой метод
// console.log(Object.keys(ship))



//===============================================================================================//
// Геттеры и сеттеры



// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     // Геттер
//     get fullName() { 
//         return `${this.firstName} ${this.lastName}`
//     },
//     // Сеттер, можно записать без set
//     set fullName(value) {
//         const [firstName, lastName] = value.split(' ')
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }

// user.fullName = 'Tom Hardy' // если setFullName, то ('Tom Hardy')
// console.log(user.fullName) // Tom Hardy
// console.log(user.firstName) // Tom



//===============================================================================================//
// Конструктор

// Функии-конструкторы 
// Ими может быть любая функция, кроме стрелоччной 
// Если функция является конструктором, то её принято называть с большой буквы
// Когда вызывается с ключевым словом new, тогда она запускается как конструктор
// Она создаёт {} и наполняет его данными



// function User(name, age) {
//     this.name = name
//     this.age = age
// }

// const user1 = new User('John', 27)
// console.log(user1) // User { name: 'John', age: 27 }



// function User(name, age) {
//     this.name = name
//     this.age = age

//     this.sayHi = function() {
//         console.log(`Hi, I am ${this.name}`)
//     }
// }

// const user1 = new User('John', 27)
// console.log(user1) // User { name: 'John', age: 27 }
// user1.sayHi() // Hi, I am John

// const user2 = new User('Bob', 30)
// user2.sayHi() // Hi, I am Bob

// console.log(user2.sayHi === user1.sayHi) // false - при каждом вызове конструктора, мы создаём новую функцию



// Оптимизированный метод
// function User(name, age) {
//     this.name = name
//     this.age = age
// }

// User.prototype.sayHi = function() {
//     console.log(`Hi, I am ${this.name}`)
// }

// const user1 = new User('John', 27)
// const user2 = new User('Bob', 30)

// console.log(user1) 

// user1.sayHi()



//===============================================================================================//

















































// // 📌 Контекст вызова (this) и методы call, apply, bind

// //===============================================================================================//
// // 🔹 Что такое this?
// // `this` — это **ссылка на объект**, который вызвал функцию. Значение `this` зависит от **способа вызова** функции.

// // 📌 Основные правила:
// // ✅ В глобальной области видимости (в браузере) `this` = `window`.
// // ✅ В методах объекта `this` = сам объект.
// // ✅ В стрелочных функциях `this` берется из внешнего контекста.
// // ✅ В конструкторах `this` указывает на **новый созданный объект**.
// // ✅ Значение `this` можно менять с помощью `.call()`, `.apply()`, `.bind()`.

// //===============================================================================================//
// // 🔹 Примеры работы this

// // 📌 Глобальный контекст
// console.log(this); // В браузере: window, в Node.js: {}

// function showThis() {
//     console.log(this);
// }
// showThis(); // В браузере: window

// // 📌 Контекст внутри объекта
// const user = {
//     name: "Tom",
//     sayHi() {
//         console.log(`Hi, I'm ${this.name}`);
//     },
// };
// user.sayHi(); // "Hi, I'm Tom"

// // 📌 Контекст в стрелочных функциях
// const userArrow = {
//     name: "Alice",
//     sayHi: () => console.log(`Hi, I'm ${this.name}`),
// };
// userArrow.sayHi(); // "Hi, I'm undefined" (this не привязан)

// // 📌 Контекст в конструкторах
// function User(name) {
//     this.name = name;
// }
// const newUser = new User("John");
// console.log(newUser.name); // "John"

// //===============================================================================================//
// // 🔹 Методы call(), apply(), bind()

// // 📌 Метод `.call()`
// // Вызывает функцию **с заданным контекстом** (`this`) и аргументами **по отдельности**.
// function greet(age) {
//     console.log(`Hi, I'm ${this.name} and I'm ${age} years old.`);
// }
// const person = { name: "Tom" };
// greet.call(person, 25); // "Hi, I'm Tom and I'm 25 years old."

// // 📌 Метод `.apply()`
// // То же, что `call()`, но аргументы передаются **массивом**.
// greet.apply(person, [30]); // "Hi, I'm Tom and I'm 30 years old."

// // 📌 Метод `.bind()`
// // Создает **новую функцию**, привязанную к переданному `this`, но **не вызывает** её сразу.
// const boundGreet = greet.bind(person);
// boundGreet(40); // "Hi, I'm Tom and I'm 40 years old."

// //===============================================================================================//
// // 🔹 Применение bind() для работы с объектами

// const logger = {
//     prefix: "Log:",
//     log(message) {
//         console.log(`${this.prefix} ${message}`);
//     },
// };

// const customLog = logger.log.bind(logger);
// customLog("Message 1"); // "Log: Message 1"

// //===============================================================================================//
// // 🎯 Итог:
// // ✅ `this` зависит от **способа вызова** функции.
// // ✅ `call()` и `apply()` **меняют `this`**, вызывая функцию сразу.
// // ✅ `bind()` **создает новую функцию** с привязанным `this`, но не вызывает её сразу.
// // ✅ В стрелочных функциях `this` берется из **внешнего контекста**.



// // 📌 Глобальный объект, "strict mode", this в стрелочных функциях и заимствование методов

// //===============================================================================================//
// // 🔹 Глобальный объект

// // 📌 В браузере глобальный объект — `window`, в Node.js — `global`
// console.log(window); // Глобальный объект в браузере
// console.log(global); // Глобальный объект в Node.js

// // 📌 `globalThis` — общий способ доступа к глобальному объекту
// console.log(globalThis); // Работает в браузере и Node.js

// // 📌 Глобальные переменные становятся свойствами `window`
// var testVar = "Hello!";
// console.log(window.testVar); // "Hello!"

// // 📌 Будьте осторожны с глобальными переменными, они могут привести к неожиданному поведению

// //===============================================================================================//
// // 🔹 "strict mode" (строгий режим)

// // 📌 Включение "strict mode"
// "use strict";

// function example() {
//     "use strict"; // Можно включать локально в функции
// }

// // 📌 Что изменяется в строгом режиме?
// // ✅ Запрещено использование необъявленных переменных
// // ✅ `this` в функциях возвращает `undefined` (вместо `window`)
// // ✅ Запрещено переопределение `readonly` свойств объектов
// // ✅ `eval` ограничен в доступе к переменным из внешней области

// // 📌 Ошибка без строгого режима
// x = 10; // В обычном режиме `x` создастся как глобальная переменная
// console.log(x);

// // 📌 Ошибка в строгом режиме
// "use strict";
// try {
//     y = 20; // Ошибка: y не объявлена
// } catch (error) {
//     console.log(error.message); // "y is not defined"
// }

// //===============================================================================================//
// // 🔹 this в стрелочных функциях

// // 📌 В стрелочных функциях `this` берется из **внешнего контекста**
// const user = {
//     name: "Alice",
//     sayHi: function () {
//         setTimeout(() => {
//             console.log(`Hi, I'm ${this.name}`);
//         }, 1000);
//     },
// };
// user.sayHi(); // "Hi, I'm Alice" (this берется из метода объекта)

// // 📌 Обычные функции привязывают `this` к `window` (в строгом режиме — `undefined`)
// const userWrong = {
//     name: "Alice",
//     sayHi: function () {
//         setTimeout(function () {
//             console.log(`Hi, I'm ${this.name}`);
//         }, 1000);
//     },
// };
// userWrong.sayHi(); // "Hi, I'm undefined" (this = window)

// // 📌 Решение: Использование `.bind()`
// const userBind = {
//     name: "Alice",
//     sayHi: function () {
//         setTimeout(function () {
//             console.log(`Hi, I'm ${this.name}`);
//         }.bind(this), 1000);
//     },
// };
// userBind.sayHi(); // "Hi, I'm Alice"

// //===============================================================================================//
// // 🔹 Заимствование методов

// // 📌 Можно использовать методы объектов для других объектов

// const person = {
//     name: "Tom",
//     greet() {
//         console.log(`Hello, I'm ${this.name}`);
//     },
// };

// const anotherPerson = { name: "John" };

// // 📌 Используем `.call()` для заимствования метода
// person.greet.call(anotherPerson); // "Hello, I'm John"

// // 📌 Заимствование метода `Array.prototype.join` для объекта
// const userObj = { 0: "Alice", 1: "Bob", length: 2 };
// console.log(Array.prototype.join.call(userObj, ", ")); // "Alice, Bob"

// // 📌 Заимствование метода `Object.values` для массива
// const numericArr = [10, 20, 30];
// console.log(Object.values.call(null, numericArr)); // [10, 20, 30]

// //===============================================================================================//
// // 🎯 Итог:
// // ✅ Глобальный объект зависит от окружения (`window`, `global`, `globalThis`).
// // ✅ "strict mode" помогает избежать ошибок и делает код безопаснее.
// // ✅ В стрелочных функциях `this` **берется из внешнего контекста**.
// // ✅ Методы можно **заимствовать** у других объектов через `.call()`, `.apply()`, `.bind()`.



