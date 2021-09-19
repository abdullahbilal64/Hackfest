const mongoose = require('mongoose');
const schema = mongoose.Schema;


var comment = new schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String
    },
    image: [{
        type: String
    }],
    likes:{
        type: Number,
        default: 0
    }
});

var post = new schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String
    },
    dateAndTime: {
        type: Date,
        default: Date.now
    },
    image: [{
        type: String
    }],
    likes: {
        type: Number,
        default: 0
    },
    comments: [comment]
});

module.exports = mongoose.model('post', post);