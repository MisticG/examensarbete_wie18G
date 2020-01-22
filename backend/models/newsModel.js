const mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    imgUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('NewsPost', NewsSchema);