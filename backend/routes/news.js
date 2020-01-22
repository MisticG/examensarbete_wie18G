const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const NewsPost = require('../models/newsModel');

require('dotenv/config');

try {
    mongoose.connect(
        process.env.DB_NEWS,
        {useUnifiedTopology: true, useNewUrlParser: true },
        () => {
        console.log("Connected to DB_NEWS!");
    });
} catch (error) {
    console.error(error);
}

//GET BACK ALL THE NEWS
router.get('/', async (req, res) => {
    try{
        const newsPosts = await NewsPost.find();
        res.json(newsPosts);
    }catch(err){
        res.json({message: err});
    }
});

//SUBMITS A NEWSPOST
router.post('/', async (req, res) => {

    const newsPost = new NewsPost({
        title: req.body.title,
        content: req.body.content,
        imgUrl: req.body.imgUrl
    });

    try{
    const savedNews = await newsPost.save();
        res.json(savedNews);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;