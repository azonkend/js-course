// Browser storage


//================================================================================================//
// 🏠 localStorage и sessionStorage

/*
localStorage и sessionStorage — это механизмы хранения данных в браузере.
Они позволяют сохранять данные в браузере на стороне клиента, не требуя запросов к серверу.
*/

const exampleSource = "https://example.com:9000";

// ✅ localStorage - это долговременное хранилище данных.
/*
✔ Привязан к источнику (протокол / домен / порт), например: ${exampleSource}
✔ Общий для всех вкладок и окон с одинаковым источником.
✔ Данные сохраняются даже после перезагрузки браузера или системы.
*/

// ✅ sessionStorage - хранилище на время сессии.
/*
✔ Привязан к вкладке браузера.
✔ Данные исчезают после закрытия вкладки, но сохраняются при её перезагрузке.
*/


//================================================================================================//
// 📝 Методы хранения

/*
localStorage и sessionStorage поддерживают одни и те же методы работы с данными.
*/

// ✅ Запись данных
localStorage.setItem('username', 'Alice');
sessionStorage.setItem('sessionUser', 'Bob');

// ✅ Чтение данных
console.log(localStorage.getItem('username')); // Выведет: Alice
console.log(sessionStorage.getItem('sessionUser')); // Выведет: Bob

// ✅ Удаление данных
localStorage.removeItem('username');
sessionStorage.removeItem('sessionUser');

// ✅ Очистка всех данных
localStorage.clear();
sessionStorage.clear();

// ✅ Получение ключа по индексу
console.log(localStorage.key(0)); 

// ✅ Получение количества элементов
console.log(localStorage.length); 


//================================================================================================//
// 📌 Чтение и запись сложных данных (JSON)

/*
localStorage и sessionStorage хранят только строки.
Если нужно записать объект или массив, используем JSON.stringify() и JSON.parse().
*/

// ✅ Запись объекта
const user = { name: 'Charlie', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

// ✅ Чтение объекта
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // Выведет: Charlie


//================================================================================================//
// 🔄 Событие storage

/*
Событие storage срабатывает при изменении данных в localStorage или sessionStorage, НО:
✔ Работает ТОЛЬКО между вкладками одного источника.
✔ НЕ срабатывает в той же вкладке, где изменение произошло.
*/

window.addEventListener('storage', (event) => {
    console.log(`
        URL: ${event.url} // URL страницы, где произошло изменение
        Хранилище: ${event.storageArea} // localStorage или sessionStorage
        Ключ: ${event.key} // ключ, который изменился (null, если вызван .clear())
        Предыдущее значение: ${event.oldValue} // старое значение
        Новое значение: ${event.newValue} // новое значение (null, если ключ удалён)
    `);
});

// Открываем другую вкладку и выполняем:
// localStorage.setItem('theme', 'dark');

// Событие storage полезно для синхронизации данных между вкладками!


//================================================================================================//
// 🔗 Итоги

/*
✔ localStorage хранит данные длительно, sessionStorage — только в рамках одной вкладки.
✔ Данные хранятся только в виде строк, поэтому сложные структуры надо преобразовывать через JSON.stringify() и JSON.parse().
✔ Событие storage помогает следить за изменениями в локальном хранилище, но срабатывает только между вкладками.
*/

