const mongoose = require('mongoose');
const schema = mongoose.Schema;


var event = new schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    eventName: {
        type: String,
        default: 'Remotebase Event'
    },
    eventLocation: {
        type: String,
        default: 'Online'
    },
    Description: {
        type: String
    }
});

module.exports = mongoose.model('event', event);