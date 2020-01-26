const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postsRoute = require('./routes/products');
const sendMessageRoute = require('./routes/sendMessage');
//const newsRoute = require('./routes/news');
const path = require('path');
const cors = require('cors');
require('dotenv/config');



const fs = require('fs');
const http = require('http');
const https = require('https');


// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/www.backablommor.se/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/www.backablommor.se/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/www.backablommor.se/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};



app.use(cors())

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

//Telling the server to use index.html in "build" folder
app.use(express.static(path.join(__dirname.replace("backend", ''), 'frontend/build')));

app.get('*', function(req, res) {
    
  res.sendFile(path.join(__dirname.replace("backend", '') + '/frontend/build/index.html'));
  res.set('Content-Type', 'text/css');
});

// Starting both http & https servers

//const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

/*httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});*/

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});

/*const port = process.env.PORT || 443;

app.listen(port, () => console.log(`Server started port ${port}`));*/


