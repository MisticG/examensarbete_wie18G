const express = require('express');
const router = express.Router();
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
        info: req.body.info,
        img: req.body.img,
        price: req.body.price
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

module.exports = router;