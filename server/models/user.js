const mongoose = require('mongoose');
const schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

var user = new schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    participationPoints: {
        type: Number,
        default: 0
    },
    department: {
        type: String,
        default: 'Un-Assigned'
    }
});

user.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', user);