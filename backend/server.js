const express = require('express');
const app = express();
const postsRoute = require('./routes/products');
const sendMessageRoute = require('./routes/sendMessage');
const newsRoute = require('./routes/news');

app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

app.use('/products', postsRoute);

app.use('/news', newsRoute);

app.use('/send', sendMessageRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

const port = 5000;

app.listen(port, () => console.log(`Server started port ${port}`));
