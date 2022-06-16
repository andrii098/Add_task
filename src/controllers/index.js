const express = require('express');
const { Todo } = require('../entities/todo');
const todoModel = require('../model/todo');

const router = express.Router();

/* (GET запрос) Главная страничка (корневой маршрут) */
router.get("/", async (req, res) => {
    res.render('index', {
        todos: await todoModel.getTodos(),
    })
});

/* (GET запрос) Форма создания тудушки */
router.get("/createTodo", (req, res) => {
    res.render("create");
});

/* (POST запрос) Создание тудушки */
router.post("/createTodo", async (req, res) => {
    await todoModel.createTodo(new Todo(0, req.body.name, req.body.description, req.body.status, req.body.comment));
    res.redirect("/");
});

/* (GET запрос) Форма изменения тудушки */
router.get("/updateTodo/:id", async (req, res) => {
    res.render("edit", {
        todo: await todoModel.getTodo(req.params.id),
    })
});

/* (POST запрос) Изменение тудушки */
router.post("/updateTodo", async (req, res) => {
    await todoModel.updateTodo(req.body);
    res.redirect("/");
})

/* (POST запрос) Удаление тудушки */
router.post("/deleteTodo", async (req, res) => {
    await todoModel.deleteTodo(req.body.id);
    res.redirect("/");
})

module.exports = router;
