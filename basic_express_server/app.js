const express = require('express');
const bodyParser = require('body-parser');

//Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//Adding additional path for controller(routes)
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Handle not matched routes
app.use((req, res) => {
    res.status(404).send('<h2>Page not found</h2>');
});

app.listen(3000, () => {
    console.log('<h1>Server started</h1>')
});

