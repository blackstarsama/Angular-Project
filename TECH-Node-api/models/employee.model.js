const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: String,
    username: String,
    firstname: String,
    username: String,
    birthday: String,
    address: String,
    city: String,
    zipcode: String,
    phone: String,
    email: String,
    post: String,

}, {
    timestamps: true
});

module.exports = mongoose.model('Employee', EmployeeSchema);
