// 📌 Функции в JavaScript

//===============================================================================================//
// 🔹 Function Declaration (Объявление функции)
// Функцию можно вызвать **до её объявления** благодаря механизму "hoisting".

/*
    function имяФункции(аргументы, через, запятую) {
        'тело функции'
    }

    имяФункции() // вызов функции
*/ 

function getSum(a, b) {
    return a + b;
}

console.log(getSum(1, 3)); // 4

function sayHello(name) {
    const greeting = `Hhello, ${name}`
    console.log(greeting)
}

sayHello('John')

// Аргумент arguments встороен в js
// Аргументам можно задавать значения по-умолчанию, если они не определены name = 'anonymous'
function sayHi(name = 'Anonymous') { 
    console.log(`Hi, ${name}`);
}

sayHi('John'); // "Hi, John"
sayHi();       // "Hi, Anonymous"

// 📌 Возвращаемое значение (return)
function getEvenOdd(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}

console.log(getEvenOdd(5)); // "odd"

// Если return отсутствует, функция вернет undefined
function noReturnExample() {
    console.log("Просто выполняем код");
}
console.log(noReturnExample()); // undefined

//===============================================================================================//
// 🔹 Function Expression (Функциональное выражение)
// Функция **нельзя** вызвать до объявления, так как она хранится в переменной.

const getDifference = function(a, b) {
    return a - b;
};

console.log(getDifference(10, 3)); // 7

//===============================================================================================//
// 🔹 Arrow Function (Стрелочные функции)
// Упрощенный синтаксис функций.

/*
    -Функции можно передавать как аргументы в другие функции
    -Можно возвращать как результат из другой функции
    -Хранить в переменных 
    -Хранить как элементы в разных структурах элемента
*/ 

const getSquare = num => num * num;
console.log(getSquare(5)); // 25

// Если аргументов нет, используются пустые скобки:
const greet = () => 'Hello, world!';
console.log(greet()); // "Hello, world!"

// Если тело функции содержит несколько выражений, используются фигурные скобки:
const getProduct = (a, b) => {
    console.log(`Умножаем ${a} на ${b}`);
    return a * b;
};

console.log(getProduct(3, 4)); // 12

// 📌 Стрелочные функции **не имеют собственного this**
const user = {
    name: 'Alice',
    greet: function() {
        console.log(`Hi, I'm ${this.name}`); // Работает, т.к. используется обычная функция
    },
    sayHello: () => {
        console.log(`Hello, I'm ${this.name}`); // ❌ this здесь ведет себя иначе
    }
};

user.greet(); // "Hi, I'm Alice"
user.sayHello(); // "Hello, I'm undefined"

// Function expression НЕЛЬЗЯ вызывать до объявления функции
const message = 'Just learn it!'
const sendMessage = (name) => {
    const sender = 'Gromocode'
    console.log(`${name}, ${message}, You ${sender}`)
}
sendMessage('Tom')

// Function declaration МОЖНО
const message1 = 'Just learn it!'
sendMessage1('Tom')
function sendMessage1(name) {
    const sender1 = 'Gromocode'
    console.log(`${name}, ${message1}, You ${sender1}`)
}

//===============================================================================================//
// 🔹 Функции как аргументы и возврат других функций

// Функция как аргумент
const operate = (num1, num2, operation) => operation(num1, num2);

console.log(operate(10, 5, getSum)); // 15
console.log(operate(10, 5, getDifference)); // 5

// Функция может возвращать другую функцию
const createMultiplier = multiplier => num => num * multiplier;

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

//===============================================================================================//
// 🔹 Замыкание (Closure)
// Функция получает доступ к переменной из родительской области видимости, даже если родительская функция завершила выполнение.

const makeCounter = () => {
    let count = 0;
    return () => count++;
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 0
console.log(counter2()); // 1

//===============================================================================================//

/* 
    Фигурные скобки задают Lexical Environment(Лексическое окружение)

    Новый Lexical Environment создаётся при каждом выполнении функции

    Переменная - это свойство специального внутреннего объекта, 
    связанного с текущим выполняющимся блоком, функцией или скриптом.

    Функция получает ссылку на родительский Lexical Environment в момент
    создания

    Обратно переменные не видны

    Замыкание - это функция, и все внешние переменные, которые ей доступны
*/

//===============================================================================================//
// 🎯 Итог:
// ✅ Function Declaration - можно вызывать до объявления, поддерживает hoisting.
// ✅ Function Expression - создается в переменной, нельзя вызвать до объявления.
// ✅ Arrow Function - упрощенный синтаксис, не имеет собственного this.
// ✅ Функции можно передавать как аргументы, возвращать из других функций и использовать в замыканиях.










































































































