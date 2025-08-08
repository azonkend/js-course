// 📌 Операторы в JavaScript

/* 
    Унарные(работают с одним операндом) !, ++, --, +, -, ...
    Бинарные(работают с двумя операндами):
    Арифметические +, -, *, /, %
    Сравнения >, <, >=, <=, ==, ===, !=, !==
    Действие с присвоением +=, -=, *=, /=, %=, ...
    Присваивание =
    Логические &&, ||, !
    Условные if else
    Тернарные [условие] ? [значение1] : [значение2]

    Приоритет операторов: Унарные > Бинарные арифметические > Операторы сравнения > Присваивание
*/

//===============================================================================================//
// 🔹 Унарные операторы (работают с одним операндом)
let x = 5;
console.log(-x);   // -5 (унарный минус)
console.log(+x);   // 5 (унарный плюс)
console.log(++x);  // 6 (инкремент: увеличивает на 1)
console.log(--x);  // 5 (декремент: уменьшает на 1)
console.log(!true);// false (логическое отрицание)

//===============================================================================================//
// 🔹 Бинарные операторы (работают с двумя операндами)

// 1️⃣ Арифметические операторы
console.log(10 + 5);  // 15 (сложение)
// -может использоваться для преобразования в число
// -строка с текстом 
// -складывет строки
// undefined при переводе в число будет NaN

console.log(10 - 5);  // 5 (вычитание)
console.log(10 * 5);  // 50 (умножение)
console.log(10 / 5);  // 2 (деление)
console.log(10 % 3);  // 1 (остаток от деления)

// 2️⃣ Операторы сравнения
console.log(4 > 6);    // false
console.log(4 < 6);    // true
console.log(4 >= 6);   // false
console.log(4 <= 4);   // true
console.log(4 == '4'); // true (сравнение без учета типа)
console.log(4 === '4');// false (строгое сравнение)
console.log(5 != '5'); // false (нестрогое неравенство)
console.log(5 !== '5');// true (строгое неравенство)

// 3️⃣ Операторы присваивания
let num = 10;
num += 5;  // num = num + 5 → 15
num -= 3;  // num = num - 3 → 12
num *= 2;  // num = num * 2 → 24
num /= 4;  // num = num / 4 → 6
num %= 5;  // num = num % 5 → 1

// 4️⃣ Логические операторы
console.log(true && false);  // false (логическое И)
console.log(true || false);  // true (логическое ИЛИ)
console.log(!true);          // false (логическое НЕ)

//===============================================================================================//
// 🔹 Тернарный оператор
// Используется для условного выбора значения
let age = 20;
let status = age >= 18 ? 'Взрослый' : 'Ребенок';
console.log(status); // "Взрослый"

//===============================================================================================//
// 🔹 Приоритет операторов
// Унарные > Арифметические > Сравнения > Присваивание

console.log(10 + 5 > 12 && 4 < 6); // true
// Сначала 10 + 5 = 15, затем 15 > 12 → true
// 4 < 6 → true
// true && true → true

//===============================================================================================//
// 🎯 Итог:
// ✅ Операторы бывают унарные (работают с одним операндом) и бинарные (работают с двумя операндами).
// ✅ Арифметические операторы позволяют производить математические операции.
// ✅ Операторы сравнения проверяют отношения между значениями.
// ✅ Логические операторы работают с булевыми значениями.
// ✅ Тернарный оператор заменяет короткие конструкции `if-else`.



// Проверка знаний
// Что выведет консоль?

// console.log(typeof +17)
// console.log(typeof +'77') 
// console.log(+'text') 
// console.log(+true) 
// console.log(+false) 

// console.log('Hello ' + 'World')
// console.log('10' + '5') 
// console.log(10 + '5') 
// console.log('10' + 5) 
// console.log(10 + +'5') 
// console.log(1 + 3 + '6') 
// console.log('6' + 1 + 3)  
// console.log('20' - 5) 
// console.log('10' * 5) 
// console.log('10' / 5) 
// console.log('10' - '5') 
// console.log('10' * '5') 
// console.log('10' / '5') 

// console.log('seventeen' / 3) 
// console.log(10 / 0) 
// console.log(undefined + 1) 
// console.log(undefined + '1') 
// console.log(null + 8) 
// console.log(null + '8') 
// console.log('text' + null) 
// console.log('text' + undefined) 
// console.log('text' + +null) 
// console.log('text' + +undefined) 

// let num = 17
// console.log(++num)
// console.log(num++)
// console.log(num++)
// console.log(num++)
// console.log(num++)

// console.log(String(17)) 
// console.log(String(-17.17))
// console.log(String(true))
// console.log(String(false))
// console.log(String(null))
// console.log(String(0))

// console.log(Number('17'))
// console.log(Number(true)) 
// console.log(Number(false)) 
// console.log(Number(null)) 
// console.log(Number(undefined)) 
// console.log(Number('  17  ')) 
// console.log(Number('      ')) 
// console.log(Number('   17b   ')) 

// console.log(Boolean(null)) 
// console.log(Boolean(undefined)) 
// console.log(Boolean(0)) 
// console.log(Boolean(-0)) 
// console.log(Boolean(NaN)) 
// console.log(Boolean('')) 
// console.log(Boolean(' ')) 
// console.log(Boolean(17)) 
// console.log(Boolean('Hello')) 

// console.log(4 < 6)
// console.log(4 > 6) 
// console.log(4 >= 6) 
// console.log(4 <= 4)
// console.log(4 == '4')
// console.log(4 === '4') 
// console.log(5 != '5') 
// console.log(5 !== '5')

// console.log(0 == '')
// console.log(0 === '') 
// console.log(undefined == null) 
// console.log(undefined === null) 
// console.log(false == 0) 
// console.log(false === 0) 
// console.log(true == 1) 
// console.log(true === 1) 

// console.log(null == 0) 
// console.log(null === 0) 
// console.log(undefined == 0) 
// console.log(undefined === 0)
// console.log(undefined < 0)
// console.log(undefined > 0)
// console.log(true == 0)
// console.log(true === 0)
// console.log(true == false)
// console.log(true === false)

// console.log(true == true) 
// console.log(true === true)
// console.log(false == false)
// console.log(false === false)

// console.log(false || true)
// console.log(false || true || false)
// console.log(false || false || false)

// console.log(false && true)
// console.log(false && true && false)
// console.log(true && true && true)

// console.log('text' || false)
// console.log(true || 'text')
// console.log(undefined || null || 0 || '' || null)
// console.log(undefined || null || 0 || '' || 0)

// console.log('text' && false) 
// console.log(true && 'text') 
// console.log(undefined && null && 0 && '' && null) 
// console.log(undefined && null && 0 && '' && 0)

// console.log(!true)
// console.log(!false)
// // Перевёл с троку в true и сделал отрицание
// console.log(!'text')
// // Отрицает отрицание:)
// // !! аналог Boolean()
// console.log(!!'text')

// const age = 17
// if (age < 16) {
//     console.log('Too young')
// } else if (age >= 16 && age < 18) {
//     console.log('Almost ready')
// } else if (age >= 18 && age < 65) {
//     console.log('Ready')
// } else {
//     console.log('Too old')
// }

// const result = age <= 40 ? console.log('full') : console.log('empty')