const express = require('express');
const app = express();
const path = require('path');
const postsRoute = require('./routes/products');
const sendMessageRoute = require('./routes/sendMessage');
const newsRoute = require('./routes/news');

const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

//app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/products', postsRoute);

app.use('/news', newsRoute);

app.use('/send', sendMessageRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

//const port = 5000;

app.listen(port, () => console.log(`Server started port ${port}`));
