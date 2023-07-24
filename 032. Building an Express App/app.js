const express = require("express");
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.status(500).send('Request received.');
});

app.listen(3000, () => {
    console.log('The server is listening on port 3000');
});
