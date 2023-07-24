const express = require('express');
const deleteRouter = require('./delete');
const app = express();

// Other middleware and route definitions

app.use('/products', deleteRouter);

// Start the server
app.listen(3000, () => {
    console.log('The server is listening on port 3000');
});
