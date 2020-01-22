const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/post');
require('dotenv/config');

//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

/*router.get('/specific', (req, res) => {
    res.send('Specific post')
});*/

//SUBMITS A POST
router.post('/', async (req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
    const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

//SPECIFIC POST
router.get('/:postId', async (req, res) => {

})

try {
    mongoose.connect(
        process.env.DB_CONNECTION,
        {useUnifiedTopology: true, useNewUrlParser: true },
        () => {
        console.log("Connected to DB!");
    });
} catch (error) {
    console.error(error);
}

module.exports = router;