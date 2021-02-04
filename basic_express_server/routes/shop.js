const router = require('express').Router();
const path = require('path');

const rootDir = require('../utils/path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});


module.exports = router;