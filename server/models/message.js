const mongoose = require('mongoose');
const schema = mongoose.Schema;

var message = new schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    to: {
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
    images:[{
        type:String
    }]
});

module.exports = mongoose.model('message', message);