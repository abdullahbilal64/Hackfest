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
    employeeID: {
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
        type: string,
        default: 'Un-Assigned'
    }
});

user.plugin(passportLocalMongoose);
module.exports = mongoose.model('user', user);