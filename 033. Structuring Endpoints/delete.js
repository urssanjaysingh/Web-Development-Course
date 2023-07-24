const express = require('express');
const connection = require("./config");

const router = express.Router();

router.delete('/:id', (request, response) => {
    const productId = request.params.id;
    connection.query(
        'DELETE FROM Product WHERE id = ?',
        [productId],
        (error, results) => {
            if (error) {
                response.status(500).json(error);
            } else {
                connection.query(
                    'SELECT * FROM Product',
                    (error, results) => {
                        if (error) {
                            response.status(500).json(error);
                        } else {
                            const updatedDB = results;
                            response.status(200).json(updatedDB);
                        }
                    }
                );
            }
        }
    );
});

module.exports = router;
