const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootDir = require('./utils/path');

//Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')))

//Adding additional path for controller(routes)
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Handle not matched routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000, () => {
    console.log('<h1>Server started</h1>')
});

