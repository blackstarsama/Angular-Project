module.exports = (app) => {
    const employee = require('../controllers/employee.controller.js');

    // Create a new user
    app.post('/employees', employee.create);

    // Retrieve all users
    app.get('/employees', employee.findAll);

    // Retrieve a single user with noteId
    app.get('/employees/:id', employee.findOne);

    // Update a user with userid
    app.put('/employees/:id', employee.update);

    // Delete a user with userid
    app.delete('/employees/:id', employee.delete);
}
