// DOM - объектная модель документа.

// Методы поиска

/* 
    document.querySelector()
    document.querySelectorAll()
    document.getElementById()
    document.getElementByName()
    document.getElementByTagName()
    document.getElementByClassName()
    elem.closest('.class-name')
    elem.matches('ul > li.selected')
    elem.closest(elem2)
*/

// Методы работы с DOM элементами

/* 
    elem.classList.add("class")
    elem.classList.add("class")
    elem.classList.remove("class")
    elem.classList.contains("class")

    document.createElement(tag)
    document.createTextNode(value)
    elem.cloneNode(deep)

    elem.hasAttribute(name)
    elem.getAttribute(name)
    elem.setAttribute(name, value)
    elem.removeAttribute(name)
    elem.attributes

    node.append()
    node.prepend()
    node.before()
    node.after()
    node.replaceWith()
    node.remove()

    elem.inserAdjacentHTML(where, html)
*/

// Свойства DOM узлов

/* 
    nodeType
    nodeName / tagName
    innerHTML
    outherHTML
    data
    textContent
    Аналоги для почти всех HTML атрибутов
*/


































// DOM - объектная модель документа.

// DOM — это интерфейс, который позволяет JavaScript взаимодействовать с HTML-страницей.
// Представьте DOM как дерево, где каждая ветка — это элемент страницы: `<html>`, `<body>`, `<div>`, `<p>` и так далее.
// Вы можете перемещаться по этому дереву, находить элементы, изменять их и даже создавать новые.

//================================================================================================//
// Методы поиска элементов

/*
    document.querySelector(selector) — возвращает первый элемент, соответствующий селектору.
    document.querySelectorAll(selector) — возвращает массив (NodeList) всех подходящих элементов.

    document.getElementById(id) — ищет элемент по его уникальному ID.
    document.getElementsByName(name) — ищет элементы по атрибуту name.
    document.getElementsByTagName(tag) — ищет элементы по тегу, например "div".
    document.getElementsByClassName(class) — ищет элементы по классу.

    elem.closest(selector) — ищет ближайшего родителя, соответствующего селектору.
    elem.matches(selector) — проверяет, соответствует ли элемент указанному селектору.

    Пример:
*/
const element = document.querySelector('.box'); // Найдёт первый элемент с классом "box"
const elements = document.querySelectorAll('div'); // Найдёт все div-элементы на странице
const button = document.getElementById('submit'); // Найдёт элемент с id="submit"

// Аналогия: Поиск элементов похож на поиск книги в библиотеке. 
// Некоторые методы, как querySelector, ищут одну книгу по названию, а querySelectorAll — целую полку с книгами.

//================================================================================================//
// Методы работы с DOM элементами

/* 
    elem.classList.add("class") — добавляет класс к элементу.
    elem.classList.remove("class") — удаляет класс.
    elem.classList.contains("class") — проверяет, есть ли класс у элемента.

    document.createElement(tag) — создаёт новый элемент.
    document.createTextNode(value) — создаёт текстовый узел.
    elem.cloneNode(deep) — клонирует элемент. Если deep = true, клонирует и вложенные элементы.

    elem.hasAttribute(name) — проверяет, есть ли у элемента атрибут.
    elem.getAttribute(name) — получает значение атрибута.
    elem.setAttribute(name, value) — устанавливает атрибут.
    elem.removeAttribute(name) — удаляет атрибут.
    elem.attributes — возвращает все атрибуты элемента.

    node.append() — добавляет содержимое в конец элемента.
    node.prepend() — добавляет содержимое в начало элемента.
    node.before() — вставляет элемент перед текущим узлом.
    node.after() — вставляет элемент после текущего узла.
    node.replaceWith() — заменяет текущий узел новым.
    node.remove() — удаляет элемент.

    elem.insertAdjacentHTML(where, html) — вставляет HTML-код в определённое место.

    Пример:
*/
const newDiv = document.createElement('div'); // Создаём новый div
newDiv.classList.add('box'); // Добавляем ему класс "box"
document.body.append(newDiv); // Добавляем его в конец body

// Аналогия: Представьте, что вы строите дом из кирпичей. 
// Вы можете добавить новый кирпич (createElement), покрасить его (classList.add) или поменять его местами (append, prepend).

//================================================================================================//
// Свойства DOM узлов

/*
    nodeType — тип узла (1 - элемент, 3 - текст).
    nodeName / tagName — имя узла (например, 'DIV' для `<div>`).
    innerHTML — получает или изменяет внутренний HTML.
    outerHTML — получает или изменяет весь HTML элемента.
    data — данные узла, если это текстовый узел.
    textContent — получает или изменяет текст внутри элемента.
*/

const heading = document.querySelector('h1');
console.log(heading.nodeType); // 1, потому что h1 — это элемент
console.log(heading.nodeName); // "H1", потому что это тег h1
console.log(heading.textContent); // Выведет текст, содержащийся в заголовке

// Итоги:
// - DOM — это способ взаимодействия JavaScript с HTML.
// - Методы позволяют искать, изменять и создавать новые элементы.
// - Используйте аналогии, чтобы лучше понять, например, как DOM — это дерево, а элементы — его ветви.