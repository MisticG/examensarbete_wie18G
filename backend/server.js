const express = require('express');
const app = express();
const postsRoute = require('./routes/posts');
const sendMessageRoute = require('./routes/sendMessage');

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

//Middlewares, functions that executes when on a specific route
app.use('/posts', () => {
    console.log("This is a middleware running");
});

app.use('/posts', postsRoute);

app.use('/send', sendMessageRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

const port = 5000;

app.listen(port, () => console.log(`Server started port ${port}`));
