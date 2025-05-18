// Строки 

//===============================================================================================//

// const text = 'My new story'
// const message = "I'm learning JavaScript"
// const poem = `This is multiline text, with ${text}`

// const TEXT = 'message'

// // // const myMessage = `
// // // The text is ${TEXT.toUpperCase()},
// // // And something else.
// // // `
// // // console.log(myMessage)

// // // \n символ переноса строки

// // console.log(TEXT[TEXT.length - 1])
// // console.log(TEXT.at(-1))
// console.log(TEXT.charAt(0))

//===============================================================================================//

//Что общего с массивами

// Некоторые схожие методы и их свойства
// .concat()
// .includes()
// .indexOf()
// .lastIndexOf()
// .length  

// Доступ по индексу
// const name = 'John'
// console.log(name[1])

// Преобразование к массиву символов
// const name = 'John'
// console.log(name.split(''))

// Методы работы со строками
// console.log('text text'.indexOf('te'))
// console.log('text text'.lastIndexOf('te'))
// console.log('text text'.match(/text/g))
// console.log('books text text'.search(/text/g))

// console.log('text text'.includes('te'))
// console.log('text text'.startsWith('te'))
// console.log('text text'.endsWith('xt'))

console.log('text text'.charAt(3))
console.log('text text'.charCodeAt(3))

console.log('some '.concat('text'))
console.log('text '.repeat(2))
console.log('text'.replace(/t/g, 'T'))
console.log(' text  '.trim())
console.log('some text'.split(' '))
console.log('some text'.slice(2, 6))
console.log('some text'.substr(2, 3)) // Устаревший метод
console.log('some text'.substring(2, 3))

console.log('some text'.toUpperCase())
console.log('Some Text'.toLowerCase())

// 'abcdefg', 4 => ['abcd', 'efg'] => ['Abcd', 'Efg'] => 'Abcd/nEng'

// const splitText = (text, len) => {
//     const strArr = []
//     let startPosition = 0
//     while(true) {
//         let chunk = text.substr(startPosition, len)
//         if (chunk.length === 0) {
//             break
//         }
//         strArr.push(chunk[0].toUpperCase() + chunk.slice(1))
//         startPosition += len
//     }
//     return strArr.join('\n')
// }

// console.log(splitText('abcdefg', 4))

// Сортировка

// String.fromCodePoint(65) // 'A'
// 'Ann'.charCodeAt(0) // 65


// const contacts = [
//     {
//         name: 'Tom',
//         phoneNumber: '666-66-66',
//     },
//     {
//         name: 'John',
//         phoneNumber: '555-55-55',
//     },
//     {
//         name: 'Ann',
//         phoneNumber: '333-33-33',
//     },
//     {
//         name: 'Stephan',
//         phoneNumber: '444-44-44',
//     },
//     {
//         name: 'Suzy',
//         phoneNumber: '222-22-22',
//     },
//     {
//         name: 'Adel',
//         phoneNumber: '111-11-11',
//     },
// ]

// const sortContacts = contacts => {
//     const result = contacts
//         .sort((a, b) => {
//             return a.name.localeCompare(b.name)
//         })
//     return result
// }

// console.log(sortContacts(contacts))

//===============================================================================================//

// Сделать поведение настраиваемым (если true, то сортировка по возростанию)
// const sortContacts = (contacts, isAsk) => {
//     const result = contacts
//         .sort((a, b) => {
//             if (isAsk === true) {
//                 return a.name.localeCompare(b.name)
//             } else {
//                 return b.name.localeCompare(a.name)
//             }
            
//         })
//     return result
// }

// console.log(sortContacts(contacts, false))

//===============================================================================================//

// calc
// '1 + 2' => '1 + 2 = 3'

// const calc = expression => {
//     const a = expression.split(' ')
//     let result
//     switch (a[1]) {
//         case '+':
//             result = +a[0] + +a[2]
//             break
//         case '-':
//             result = a[0] - a[2]
//             break
//         case '*':
//             result = a[0] * a[2]
//             break
//         case '/':
//             result = a[0] / a[2]
//             break
//     }
//     return `${expression} = ${result}`
// }

//===============================================================================================//

// const calc = expression => {
//         const [a, operator, b] = expression.split(' ')
//         let result
//         switch (operator) {
//             case '+':
//                 result = +a + +b
//                 break
//             case '-':
//                 result = a - b
//                 break
//             case '*':
//                 result = a * b
//                 break
//             case '/':
//                 result = a / b
//                 break
//         }
//         return `${expression} = ${result}`
// }

// console.log(calc('3 / 2'))


























// 📌 Строки в JavaScript

//===============================================================================================//
// 🔹 Основные способы создания строк

const text = 'My new story';
const message = "I'm learning JavaScript";
const poem = `This is multiline text, with ${text}`;

const TEXT = 'message';

const myMessage = `
The text is ${TEXT.toUpperCase()},
And something else.
`;
console.log(myMessage);

// 📌 `\n` – символ переноса строки
console.log('Hello\nWorld'); 

// 📌 Доступ к символам строки
console.log(TEXT[TEXT.length - 1]); // Последний символ
console.log(TEXT.at(-1)); // Альтернативный способ
console.log(TEXT.charAt(0)); // Первый символ

//===============================================================================================//
// 🔹 Что общего у строк с массивами?

// 📌 Строки поддерживают некоторые методы массивов
console.log('text'.concat(' text')); // Объединение
console.log('text'.includes('te')); // Проверка наличия подстроки
console.log('text'.indexOf('e')); // Индекс первого вхождения
console.log('text'.lastIndexOf('t')); // Индекс последнего вхождения
console.log('text'.length); // Длина строки

// 📌 Доступ по индексу
const name = 'John';
console.log(name[1]); // 'o'

// 📌 Преобразование строки в массив символов
console.log(name.split('')); // ['J', 'o', 'h', 'n']

//===============================================================================================//
// 🔹 Методы работы со строками

console.log('text text'.search(/text/g)); // Поиск подстроки по регулярному выражению
console.log('text text'.match(/text/g)); // Совпадения по регулярному выражению

console.log('text text'.startsWith('te')); // Проверка начала строки
console.log('text text'.endsWith('xt')); // Проверка конца строки

console.log('text text'.charAt(3)); // Получение символа по индексу
console.log('text text'.charCodeAt(3)); // Код символа

console.log('some '.concat('text')); // Объединение строк
console.log('text '.repeat(2)); // Повторение строки
console.log('text'.replace(/t/g, 'T')); // Замена символов
console.log(' text  '.trim()); // Удаление пробелов

console.log('some text'.split(' ')); // Разделение строки
console.log('some text'.slice(2, 6)); // Извлечение подстроки
console.log('some text'.substring(2, 6)); // Альтернативный способ извлечения подстроки

console.log('some text'.toUpperCase()); // Преобразование в верхний регистр
console.log('Some Text'.toLowerCase()); // Преобразование в нижний регистр

//===============================================================================================//
// 🔹 Функция разделения строки на части

const splitText = (text, len) => {
    const strArr = [];
    let startPosition = 0;
    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) break;
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;
    }
    return strArr.join('\n');
};

console.log(splitText('abcdefg', 4));

//===============================================================================================//
// 🔹 Сортировка строк

console.log(String.fromCodePoint(65)); // 'A'
console.log('Ann'.charCodeAt(0)); // 65

const contacts = [
    { name: 'Tom', phoneNumber: '666-66-66' },
    { name: 'John', phoneNumber: '555-55-55' },
    { name: 'Ann', phoneNumber: '333-33-33' },
    { name: 'Stephan', phoneNumber: '444-44-44' },
    { name: 'Suzy', phoneNumber: '222-22-22' },
    { name: 'Adel', phoneNumber: '111-11-11' }
];

// 📌 Сортировка контактов
const sortContacts = (contacts, isAsc = true) => {
    return contacts.sort((a, b) => isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
};

console.log(sortContacts(contacts, false));

//===============================================================================================//
// 🔹 Простая калькуляторная функция

const calc = (expression) => {
    const [a, operator, b] = expression.split(' ');
    let result;
    switch (operator) {
        case '+': result = +a + +b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
    }
    return `${expression} = ${result}`;
};

console.log(calc('3 / 2'));

//===============================================================================================//
// 🎯 Итог:
// ✅ Строки имеют много общих методов с массивами.
// ✅ Можно преобразовывать строки в массивы и работать с символами по индексу.
// ✅ `localeCompare()` помогает сортировать строки правильно.
// ✅ Используйте `.trim()`, `.toUpperCase()`, `.split()` и другие методы для удобного управления текстом.
