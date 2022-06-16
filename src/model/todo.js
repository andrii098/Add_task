const getConnection = require("../database");
const { Todo } = require("../entities/todo");


// Получить все тудушки
async function getTodos() {
    const connection = await getConnection();
    return await connection
        .manager
        .find(Todo);
}

// Получить одну тудушку по айди
async function getTodo(id) {
    const connection = await getConnection();
    return await connection
            .manager
            .findOne(Todo, id);
}

// Создать тудушку
async function createTodo(todo) {
    const connection = await getConnection();
    await connection
            .manager
            .save(todo);
}

// Удалить тудушку
async function deleteTodo(id) {
    const connection = await getConnection();
    await connection
            .manager
            .delete(
                Todo, {
                id,
            })
}

// Обновить тудушку 
async function updateTodo(todo) {
    const connection = await getConnection();
    await connection
            .manager
            .update(Todo, {
                id: todo.id,
            }, todo);
}


module.exports = {
    getTodos,
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo,
}

