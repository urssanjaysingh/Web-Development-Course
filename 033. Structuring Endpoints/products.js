const express = require('express');
const app = express();

const products = [
    { category: 'electronics', price: 400, title: 'phone', id: 1 },
    { category: 'electronics', price: 900, title: 'tv', id: 2 },
    { category: 'electronics', price: 200, title: 'vacuum', id: 3 },
];

app.get('/products/:id', (req, res) => {
    const params = req.params;
    const requestedProduct = products.find(product => product.id === Number(params.id)); // Fixed typo: products.id -> product.id
    if (!requestedProduct) {
        res.status(404).send(
            `The product with the ID ${params.id} does not exist`
        );
    } else {
        res.status(200).send(requestedProduct);
    }
});

app.listen(3000, () => {
    console.log('The server is listening on port 3000');
});
