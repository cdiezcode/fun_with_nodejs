const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Shop home page</h1>');
});


module.exports = router;