const express = require('express');
const routes = require('./routes/users.js');

const app = express();
const PORT =5000;

app.use(express.json()); //Observe that the express app uses the middleware express.json() to handle the request as a json object.

app.use("/user", routes); //Observe that the express app uses routes to handle the endpoints which start with /user. This means that for all the endpoints starting with /user, the server will go and look for an endpoint handler in users.js.

app.use("/sort", routes);

app.listen(PORT,()=>console.log("Server is running at port "+PORT));


// Recall that GET, POST, PUT and DELETE are the commonly used HTTP methods to perform CRUD operations. Those operations retrieve and send data to the server.

// GET is used to request data from a specified resource.

// POST is used to send data to a server for creating a resource.

// PUT is used to send data to a server to update a resource.

// DELETE is used for deleting a specified resource.

// POST AND PUT are sometimes used interchangeably.

// This lab requires some packages to be installed. The express and nodemon package for starting and running the Express server and jsonwebtoken and express-session for session based authentication.
// express - This is for creating a server to serve the API endpoints.
// nodemon - This will help to restart the server when you make any changes to the code.
// jsonwebtoken - This package helps in generating a JSON web token which we will use for authentication. A JSON web token (JWT) is a JSON object used to communicate information securely over the internet (between two parties). It can be used for information exchange and is typically used for authentication systems.
// express-session - This package will help us to maintain the authentication for the session.
//These packages are defined in as dependencies in packages.json.

//Observe that the express app uses the middleware express.json() to handle the request as a json object.