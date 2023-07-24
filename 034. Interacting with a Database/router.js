require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const router = express.Router();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.use(express.json());

router.get('/products', (req, res) => {
    connection.query('SELECT * FROM product', (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('There is an issue with your request.');
        } else {
            const products = results;
            res.status(200).json(products);
        }
    });
});

router.post('/products', (req, res) => {
    const { name, price, description } = req.body;

    const newProduct = {
        name: "Smart TV",
        price: 699.99,
        description: "A high-definition smart TV with a large screen and various connectivity options."
    };

    connection.query('INSERT INTO product SET ?', newProduct, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send('There is an issue with your request.');
        } else {
            console.log('New product inserted successfully.');
            res.status(201).send('Product inserted successfully.');
        }
    });
});

router.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    const { name, price, description } = req.body;

    const updatedProduct = {
        name: "Digital Camera",
        price: 499.99,
        description: "A professional-grade digital camera with high-resolution capabilities and advanced shooting features."
    };

    connection.query('UPDATE product SET ? WHERE id = ?', [updatedProduct, productId], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send('There is an issue with your request.');
        } else if (result.affectedRows === 0) {
            res.status(404).send('Product not found.');
        } else {
            console.log('Product updated successfully.');
            res.status(200).send('Product updated successfully.');
        }
    });
});

app.use(router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
