const express = require('express');
const connection = require("./config");

const router = express.Router();

router.put('/:id', (req, res) => {
    const productId = req.params.id;
    const { name, price, description } = req.body;

    connection.query(
        'UPDATE Product SET name = ?, price = ?, description = ? WHERE id = ?',
        [name, price, description, productId],
        (error, results) => {
            if (error) {
                res.status(500).json(error);
            } else {
                connection.query(
                    'SELECT * FROM Product WHERE id = ?',
                    [productId],
                    (error, results) => {
                        if (error) {
                            res.status(500).json(error);
                        } else {
                            const updatedProduct = results[0];
                            res.status(200).json(updatedProduct);
                        }
                    }
                );
            }
        }
    );
});

module.exports = router;
