const mysql = require('mysql2');

// Create a MySQL connection pool
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Sanju@26',
    database: 'myDatabase'
});

module.exports = connection;
