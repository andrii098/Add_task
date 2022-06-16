const typeorm = require("typeorm");

let connection = null;

// Настройка и подключение к базе данных
module.exports = async function getConnection() {
    if (!connection) {
        connection = await typeorm.createConnection({
            type: "mysql",
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            synchronize: true,
            logging: false,
            entities: [
                require("./schemas/todo"),
            ],
        })
    }
    return connection;
} 




