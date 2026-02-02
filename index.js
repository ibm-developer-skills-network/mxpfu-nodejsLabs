// Import Express and user routes, create an instance of Express
// Initial setup for an Express server
const express = require('express');
const routes = require('./routes/users.js');
const app = express();
const PORT = 5000;

// Use JSON parsing middleware and user routes
app.use(express.json()); // the express app uses the middleware express.json() to handle the request as a json object.
app.use("/user", routes); //the express app uses routes to handle the endpoints which start with /user. This means that for all the endpoints starting with /user, the server will go and look for an endpoint handler in users.js.


// Start the server and log a message when it's running
app.listen(PORT, () => console.log("Server is running at port " + PORT));
