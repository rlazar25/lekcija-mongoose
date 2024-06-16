const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: String,
    deposit: Number,
    cCards: [String],
    createdAt: {
        type: Date,
        default: function() {
            return Date.now();
        }
    },

});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;