
// Классы 

// Классы - тоже функции

/* 
    function User(name, age) {
        this.rple = 'viewer'
        this.name = name
        this.age = age
    }

    User.prototype,sayHi = function() {
        console.log(`Hi, I am ${this.name}`)
    }

    User.run = function() {
        console.log('Running')
    }

    User.senseOfLife = 42
*/

// Пример класса

/* 
    - нельзя вызвать без new
    - методы неперечислимые
    - код внутри класса выполняется в строгом режиме (`use strict`) 
*/

// class User {
//     role = 'viewer'
//     static senseOfLife = 42

//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     static run() {
//         console.log('Running')
//     }

//     sayHi() {
//         console.log(`Hi, I am ${this.name}`)
//     }
// }

// console.log(typeof User) // function

//================================================================================================//
// Преобразовываем функцию-конструктор в класс

// Функция
// function User(name, age) {
//     this.name = name
//     this.age = age
// }

// User.prototype.sayHi = function() {
//     console.log(`Hi, I am ${this.name}`)
// }

// User.prototype.requestNewPhoto = function() {
//     console.log(`New photo request was sent for ${this.age}`)
// }

// User.prototype.setAge = function(value) {
//     if(value < 0) {
//         return false
//     }
//     this.age = value
//     if(value >= 25) {
//         this.requestNewPhoto()
//     }
//     return value
// }


// Класс
// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     sayHi() {
//     console.log(`Hi, I am ${this.name}`)
//     }

//     requestNewPhoto() {
//     console.log(`New photo request was sent for ${this.age}`)
//     }

//     setAge(value) {
//         if(value < 0) {
//             return false
//         }
//     this.age = value
//     if(value >= 25) {
//         this.requestNewPhoto()
//     }
//     return value
//     }
// }

// Ещё пример
// class Vehicle {
//     constructor(name, hasWheels) {
//         this.hasWheels = hasWheels
//         this.name = name
//     }

//     move() {
//         console.log(`${this.name} is moving`)
//     }

//     stop() {
//         console.log(`${this.name} stopped`)
//     }
// }

// class Ship extends Vehicle {
//     constructor(name, speed) {
//         super(name, false)
//         this.speed = speed 
//     }

//     startMachine() {
//         console.log(`${this.name} lifting anchor up`)
//         this.move()
//     }

//     stopMachine() {
//         this.stop()
//         console.log(`${this.name} lifting anchor down`)
//     }
// }

// const ship1 = new Ship('Aurora', 17)

// ship1.startMachine()

// console.log(ship1)

//================================================================================================//
// Приватнойсть свойств и методов
// class Wallet {
// // Если свойство не устанавливается как параметр конструктора, то конструктор
// // можно не писать
// // _balance = 0
//     constructor() {
//         this._balance = 0
//     }

//     getBalance() {
//         return this._balance
//     }

//     deposit(amount) {
//         this._balance += amount
//     }

//     withdraw(amount) {
//         if(amount > this._balance) {
//             console.log('No enough funds')
//             return
//         }

//         this._balance -= amount
//     }
// }

// const wallet1 = new Wallet()

// console.log(wallet1.getBalance())
// wallet1.deposit(45)
// console.log(wallet1.getBalance())
// wallet1.deposit(45)
// console.log(wallet1.getBalance())
// wallet1.withdraw(30)
// console.log(wallet1.getBalance())
// wallet1.withdraw(61)
// console.log(wallet1.getBalance())


// Оптимизированный вариант
// class Wallet {
//     // Если свойство не устанавливается как параметр конструктора, то конструктор
//     // можно не писать
//     _balance = 0

//     getBalance() {
//         return this._balance
//     }

//     deposit(amount) {
//         this._balance += amount
//     }

//     withdraw(amount) {
//         if(amount > this._balance) {
//             console.log('No enough funds')
//             return
//         }

//         this._balance -= amount
//     }
// }




































// Определение класса
//================================================================================================//

/*
Класс — это шаблон для создания объектов, содержащий свойства (данные) и методы (функции).
Представьте себе класс как чертеж машины. Он определяет, какие детали должны быть у машины,
но каждая созданная по этому чертежу машина может иметь свой цвет, двигатель и т. д.
*/

// Классы - тоже функции
function User(name, age) {
    this.role = 'viewer'; // Свойство: роль пользователя по умолчанию
    this.name = name; // Свойство: имя пользователя
    this.age = age; // Свойство: возраст пользователя
}

// Добавляем метод в прототип, доступный всем экземплярам User
User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
};

// Статический метод, доступный только классу, но не его экземплярам
User.run = function() {
    console.log('Running');
};

// Статическое свойство, доступное только классу
User.senseOfLife = 42;

// Создание экземпляра класса User
// const user1 = new User("Vanya", 30);

// Вывод информации о созданном объекте
// console.log(user1); // { role: 'viewer', name: 'Vanya', age: 30 }

// Вызов метода, определённого в прототипе
// user1.sayHi(); // Hi, I am Vanya

// Вызов статического метода (доступен только через сам класс, а не через его экземпляр)
// User.run(); // Running

// Доступ к статическому свойству
// console.log(User.senseOfLife); // 42



// Теперь реализуем аналогичный класс с использованием class
class UserClass {
    role = 'viewer'; // Свойство класса
    static senseOfLife = 42; // Статическое свойство класса

    constructor(name, age) {
        this.name = name; // Присваиваем переданное имя
        this.age = age; // Присваиваем переданный возраст
    }

    static run() {
        console.log('Running');
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
}

console.log(typeof UserClass); // function (классы в JS — это особый вид функций)

//================================================================================================//
// Свойства и методы

class Person {
    constructor(name, age) {
        this.name = name; // Устанавливаем имя
        this.age = age; // Устанавливаем возраст
    }

    // Метод, который выводит информацию о человеке
    greet() {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`);
    }
}

const person1 = new Person("Алекс", 25);
person1.greet(); // Привет, меня зовут Алекс, мне 25 лет.

//================================================================================================//
// Наследование

/*
Наследование позволяет создавать новый класс на основе существующего.
Это позволяет избежать дублирования кода и расширять функциональность базового класса.
*/

class Vehicle {
    constructor(name, hasWheels) {
        this.name = name; // Имя транспортного средства
        this.hasWheels = hasWheels; // Имеет ли колёса
    }

    move() {
        console.log(`${this.name} is moving`); // Метод движения
    }

    stop() {
        console.log(`${this.name} stopped`); // Метод остановки
    }
}

// Класс Ship наследует свойства и методы класса Vehicle
class Ship extends Vehicle {
    constructor(name, speed) {
        super(name, false); // Вызываем конструктор родителя и устанавливаем false для колёс
        this.speed = speed; // Устанавливаем скорость корабля
    }

    startMachine() {
        console.log(`${this.name} lifting anchor up`); // Логика поднятия якоря
        this.move(); // Вызываем метод движения
    }

    stopMachine() {
        this.stop(); // Останавливаем корабль
        console.log(`${this.name} lifting anchor down`); // Логика опускания якоря
    }
}

const ship1 = new Ship('Aurora', 17);
ship1.startMachine();
console.log(ship1);

//================================================================================================//
// Приватные свойства и методы

/*
Приватные свойства и методы позволяют скрывать данные внутри класса.
Они недоступны извне и могут быть изменены только внутри самого класса.
*/

class Wallet {
    _balance = 0; // Приватное свойство баланса

    getBalance() {
        return this._balance; // Метод для получения баланса
    }

    deposit(amount) {
        this._balance += amount; // Увеличиваем баланс
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log('No enough funds'); // Проверяем наличие средств
            return;
        }
        this._balance -= amount; // Уменьшаем баланс
    }
}

const wallet1 = new Wallet();
console.log(wallet1.getBalance()); // 0
wallet1.deposit(45);
console.log(wallet1.getBalance()); // 45
wallet1.withdraw(30);
console.log(wallet1.getBalance()); // 15

//================================================================================================//
// instanceof

/*
instanceof — оператор, который проверяет, принадлежит ли объект определённому классу.
Это полезно для проверки типа данных перед выполнением специфических операций.
*/

console.log(person1 instanceof Person); // true (person1 является экземпляром класса Person)
console.log(ship1 instanceof Vehicle); // true (ship1 является экземпляром Vehicle)
console.log(ship1 instanceof Person); // false (ship1 не является экземпляром Person)

//================================================================================================//
// 🎯Итог:

/*
    ✅Классы — это удобный способ создания объектов.
    ✅Конструктор создаёт объект.
    ✅Свойства и методы управляют поведением объекта.
    ✅Наследование помогает избегать дублирования кода.
    ✅Приватные поля скрывают данные внутри класса.
    ✅instanceof проверяет принадлежность объекта классу.

    Использование классов помогает писать чистый, структурированный код!
*/