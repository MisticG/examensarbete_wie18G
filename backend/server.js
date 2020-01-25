const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postsRoute = require('./routes/products');
const sendMessageRoute = require('./routes/sendMessage');
//const newsRoute = require('./routes/news');
const path = require('path')
require('dotenv/config');

app.use(express.urlencoded({extended: false}))
app.use(express.json())

try {
    mongoose.connect(
        process.env.DB_PRODUCTS,
        {useUnifiedTopology: true, useNewUrlParser: true },
        () => {
        console.log("Connected to DB_PRODUCTS!");
    });
} catch (error) {
    console.error(error);
}

app.use('/products', postsRoute);

//app.use('/news', newsRoute);

app.use('/send', sendMessageRoute);

//Telling the server to route to the file index.html in "build" folder
app.use(express.static(path.join(__dirname.replace("backend", ''), 'frontend/build')));

app.get('*', function(req, res) {
    
  res.sendFile(path.join(__dirname.replace("backend", '') + '/frontend/build/index.html'));
  res.set('Content-Type', 'text/css');
});

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server started port ${port}`));


