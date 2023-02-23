const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    nameent: String,
    address: String,
    city: String,
    zipcode: String,
    name: String,
    firstname: String,
    phone: String,
    email: String,
    activity: String,

}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);
