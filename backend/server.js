const express = require('express');
const app = express();
//const mongoose = require('mongoose');
//import es6Promise from 'es6-promise';
//mongoose.Promise = es6Promise;//Promise;//require('bluebird'); //global.Promise;
//import routes
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');
require('dotenv/config');

app.use(bodyParser.json());


app.get('/api/test', (req, res) => {
    const test = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Henrik', lastName: 'Smith'},
        {id: 3, firstName: 'Moana', lastName: 'Doe'}
    ];

    res.json(test)
})


//Middlewares, functions that executes when on a specific route
/*app.use('/posts', () => {
    console.log("This is a middleware running");
});*/

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

try {
    mongoose.connect(
        process.env.DB_CONNECTION,
        {useUnifiedTopology: true, useNewUrlParser: true },
        () => {
        console.log("Connected to DB!!!!");
    });
} catch (error) {
    console.error(error);
}

const port = 5000;

app.listen(port, () => console.log(`Server started port ${port}`));