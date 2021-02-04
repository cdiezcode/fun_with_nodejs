const router = require('express').Router();

router.get('/add-product', (req, res) => {
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add product</button> </form>');
});

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;