const express = require('express');
const putRouter = require('./put');
const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Your other routes and configurations
app.use('/products', putRouter);

// Start the server
app.listen(3000, () => {
    console.log('The server is listening on port 3000');
});
