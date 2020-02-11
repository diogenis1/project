
const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
    },
    description: {
        type: String,
    },
    hashtags: {
        type: Array,
    },
    likes: {
        type: Number,
        default: 0
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: 
        {
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
                },
            text: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ArticleModel = mongoose.model('article', ArticleSchema); 
module.exports = ArticleModel;