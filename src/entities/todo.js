// Описывает интерфейс для тудушки
class Todo {
    constructor (id, name, description, status, comment) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.comment = comment;
    }
}

module.exports = {
    Todo,
}
