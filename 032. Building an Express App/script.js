const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the root directory!');
});

app.get('/movies', (req, res) => {
    res.send('Hello from the movies directory!');
});

app.get('/movies/35', (req, res) => {
    res.send('Hello. I am the movie with the id 35 in the movies directory!');
});

app.get('/movies/:id/:name', (req, res) => {
    const { id, name } = req.params;
    res.send(`Hello, I am the movie with the id ${id} and the name ${name} in the movies directory!`);
});

app.listen(8080, () => {
    console.log('The server is listening on port 8080');
});
