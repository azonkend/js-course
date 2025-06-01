
//================================================================================================//
// Чейнинг (Метод цепочки)
// Чейнинг позволяет вызывать методы последовательно, возвращая сам объект, на котором он вызывается. 
// Представьте себе очередь обработки данных, где каждый метод передает результат следующему.
// Это аналог создания "потока воды", который проходит через разные фильтры, очищаясь поэтапно.

const calc = initValue => {
    let result = initValue

    const calculator = {
        add(value) {
            result += value
            return this
        },
        mult(value) {
            result *= value
            return this
        },
        substract(value) {
            result -= value
            return this
        },
        div(value) {
            result /= value
            return this
        },
        result() {
            return result
        },
    }
    return calculator
}

const result = calc(3).add(2).mult(4).div(10).substract(5).result()

console.log(result) // -3
//================================================================================================//
// Рекурсия
// Рекурсия - это процесс, при котором функция вызывает саму себя, пока не достигнет базового случая.
// Представьте, что вы спускаетесь по лестнице, где каждый шаг - это вызов самой функции до тех пор, 
// пока вы не достигнете земли (базового случая).

const favorites = ['id-6', 'id-7']

const tree = {
    id: 'id-1',
    name: 'Products',
    nodes: [
        {
            id: 'id-2',
            name: 'Food',
            nodes: [
                {
                    id: 'id-6',
                    name: 'Drinks',
                    nodes: []
                }
            ]
        },
        {
            id: 'id-17',
            name: 'Vehicles',
            nodes: []
        }
    ],
} 

const markFavorites = (tree, favorites) => {
    const isFavorite = favorites.includes(tree.id)

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
    }
}

const result1 = markFavorites(tree, favorites)
console.log(result1)

//================================================================================================//
// Каррирование (Currying)
// Каррирование - это превращение функции, принимающей несколько аргументов, в серию вложенных функций.
// Это похоже на конвейерную сборку: каждый шаг добавляет новый параметр и передает его дальше.

// const sum = a => b => a + b

// const add3 = sum(3)  // Создаем функцию, которая добавляет 3

// const result2 = add3(5) // Добавляем 5 к 3

// console.log(result2) // 8

//================================================================================================//
// Композиция
// Композиция функций позволяет комбинировать их так, чтобы данные проходили через последовательность преобразований.
// Представьте, что нужно нарисовать картину: сначала грунтовка, затем основной слой, затем детали.

const add3 = value => value + 3
const mult2 = value => value * 2
const div4 = value => value / 4

const compose = (...funcs) => value => {
    return funcs.reduce((acc, func) => func(acc), value)
}

const doEverything = compose(
    add3,
    mult2,
    div4,
)

console.log(doEverything(3)) // ((3 + 3) * 2) / 4 = 3

//================================================================================================//
// Принципы разработки

/* 
    SOLID - принципы объектно-ориентированного программирования:
    S - Single Responsibility Principle (Принцип единственной ответственности)
    O - Open/Closed Principle (Принцип открытости/закрытости)
    L - Liskov Substitution Principle (Принцип подстановки Барбары Лисков)
    I - Interface Segregation Principle (Принцип разделения интерфейса)
    D - Dependency Inversion Principle (Принцип инверсии зависимостей)

    YAGNI (You Ain't Gonna Need It) - не реализовывай функционал, который тебе пока не нужен.
    
    DRY (Don't Repeat Yourself) - избегай повторения кода, используй абстракции и переиспользуемые функции.

    KISS — это принцип разработки, который расшифровывается как "Keep It Simple, Stupid" (Делай проще, глупец). 
    Конечно, "глупец" здесь используется в шуточной форме, чтобы подчеркнуть важность простоты в решениях.
*/
