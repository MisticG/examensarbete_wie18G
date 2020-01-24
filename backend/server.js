const express = require('express');
const app = express();
const postsRoute = require('./routes/products');
const sendMessageRoute = require('./routes/sendMessage');
const newsRoute = require('./routes/news');
const path = require('path')

app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

app.use('/products', postsRoute);

app.use('/news', newsRoute);

app.use('/send', sendMessageRoute);

//Telling the server to route to the file index.html in "build" folder
app.use(express.static(path.join(__dirname.replace("backend", ''), 'frontend/build')));

app.get('*', function(req, res) {
    
  res.sendFile(path.join(__dirname.replace("backend", '') + '/frontend/build/index.html'));
  res.set('Content-Type', 'text/css');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started port ${port}`));


