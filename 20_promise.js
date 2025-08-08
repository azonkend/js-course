// Promise

const p = new Promise((resolve, reject) => {
    // любые действия

    // resolve(data) - если работа прошла успешно

    // reject(error) - если что-то пошло не так
})

// "в ожидании"

// Промис создан, началась работа в теле функции executor
// status: "pending"
// result: undefined

// "завершённый"

// resolve(data)
// status: "fulfilled"
// result: value

// reject(error)
// status: "rejected"
// result: error 