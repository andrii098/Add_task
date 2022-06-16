const EntitySchema = require("typeorm").EntitySchema; 
const Todo = require("../entities/todo").Todo; 

// Схема в базе данных для тудушки
module.exports = new EntitySchema({
    name: "Todo",
    target: Todo,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        description: {
            type: "varchar",
        },
        status: {
            type: "int",
            default: 0
        },
        comment: {
            type: "varchar"
        }
    }
});

