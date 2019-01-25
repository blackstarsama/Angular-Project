module.exports = (app) => {
    const customer = require('../controllers/customer.controller.js');

    // Create a new user
    app.post('/customers', customer.create);

    // Retrieve all users
    app.get('/customers', customer.findAll);

    // Retrieve a single user with noteId
    app.get('/customers/:id', customer.findOne);

    // Update a user with userid
    app.put('/customers/:id', customer.update);

    // Delete a user with userid
    app.delete('/customers/:id', customer.delete);
}
