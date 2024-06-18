// Import the Express library
const express = require('express');
// Import the routes from the users.js file
const routes = require('./routes/users.js');

// Create an instance of an Express application
const app = express();
// Define the port number the server will listen on
const PORT = 5000;

// Use the express.json middleware to parse JSON request bodies
app.use(express.json());

// Use the imported routes for handling requests to paths that start with "/user"
app.use("/user", routes);

// Start the server and listen on the specified port, logging a message when the server is running
app.listen(PORT, () => console.log("Server is running at port " + PORT));
