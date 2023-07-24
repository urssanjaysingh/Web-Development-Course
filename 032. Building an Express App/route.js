const express = require('express');
const app = express();
const router = express.Router();

const validateAuth = (req, res, next) => {
    if (req.params.userId) {
        console.log('User Identified');
    }
    next();
};

router.route('/user/:userId')
    .all(validateAuth)
    .get((req, res) => res.send('Getting the user information'))
    .post((req, res) => res.send('Posting the user information'))
    .put((req, res) => res.send('Updating the user information'))
    .delete((req, res) => res.send('Deleting the user information'));

/**
 * GET /main/user/:userId: Get user information.
 * POST /main/user/:userId: Post user information.
 * PUT /main/user/:userId: Update user information.
 * DELETE /main/user/:userId: Delete user information.
 */

// http://localhost:4000/main/user/123

app.use('/main', router);

app.listen(4000, () => {
    console.log('The server is listening on port 4000');
});
