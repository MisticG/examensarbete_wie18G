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

//Telling the server to use folder "build" on frontend
app.use( express.static( `${__dirname}/../build` ) );

//app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running

app.use('/products', postsRoute);

app.use('/news', newsRoute);

//app.use('/send', sendMessageRoute);

//ROUTES
/*app.get('/', (req, res) => {
    res.send('We are on home')
});*/

//Telling the server to route to the file index.html in "build" folder
app.get('*', (req, res)=>{  
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
})

const port = 5000;

app.listen(port, () => console.log(`Server started port ${port}`));


