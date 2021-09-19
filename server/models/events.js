const mongoose = require('mongoose');
const schema = mongoose.Schema;


var event = new schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    eventName: {
        type: String,
        required:true
    },
    eventLocation: {
        type: String,
        required:true
    },
    Description: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('event', event);