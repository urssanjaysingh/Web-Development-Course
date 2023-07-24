const express = require('express');
const app = express();
const router = express.Router();

router.param('clothingId', (req, res, next, clothingId) => {
    next();
});


router.get('/clothing/:clothingId', (req, res) => {
    const clothingId = req.params.clothingId;
    console.log(`This is a request for the Clothing ID: ${clothingId}`);
    res.send('Router is getting the requested info');
});

// http://localhost:8080/products/clothing/123
app.use('/products', router);

app.listen(8080, () => {
    console.log('The server is listening on port 8080');
});
