const express = require('express');
const mysql = require('mysql2');

const app = express();

// Create a MySQL connection pool
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Sanju@26',
    database: 'myDatabase',
    authPlugins: {
        mysql_clear_password: () => () => Buffer.from('Sanju@26') // Add this line
    }
});

app.get('/products/:id', (req, res) => {
    const productID = req.params.id;
    connection.query('SELECT * FROM Product WHERE id = ?', [productID], (error, results) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(results);
        }
    });
});

app.listen(3000, () => {
    console.log('The server is listening on port 3000');
});
