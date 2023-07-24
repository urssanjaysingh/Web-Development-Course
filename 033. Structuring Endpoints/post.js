const express = require('express');
const mysql = require('mysql2');

const app = express();

// Create a MySQL connection pool
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Sanju@26',
    database: 'myDatabase'
});

app.use(express.json());

app.post('/products', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO Product SET ?', formData, (error, results) => {
        if (error) {
            res.status(500).json(error);
        } else {
            const newProductId = results.insertId;
            connection.query('SELECT * FROM Product WHERE id = ?', newProductId, (error, results) => {
                if (error) {
                    res.status(500).json(error);
                } else {
                    const newProduct = results[0];
                    res.status(201).json(newProduct);
                }
            });
        }
    });
});

app.listen(3000, () => {
    console.log('The server is listening on port 3000');
});
