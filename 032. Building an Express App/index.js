const express = require('express');
const app = express();
const usersRouter = require('./users.js');
const postsRouter = require('./posts.js');
const port = 4000;

// http://localhost:4000/users/
app.use('/users', usersRouter);

// http://localhost:4000/posts/
app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});
