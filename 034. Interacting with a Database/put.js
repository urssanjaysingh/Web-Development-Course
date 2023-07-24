require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');

    const products = [
        ['Smart Speaker', '79.99', 'A voice-controlled smart speaker for playing music and accessing virtual assistants.'],
        ['Wireless Mouse', '19.99', 'A wireless mouse for comfortable and convenient computer navigation.'],
        ['External Hard Drive', '129.99', 'An external hard drive for secure storage and backup of your data.']
    ];

    connection.query(
        "INSERT INTO Product (name, price, description) VALUES ?",
        [products],
        (error, result) => {
            if (error) throw error;
            console.log(result);
        }
    );
});
