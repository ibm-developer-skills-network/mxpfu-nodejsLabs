const express = require('express');
const routes = require('./routes/users.js');
const jwt = require('jsonwebtoken');
const session = require('express-session')

const app = express();
const PORT =5000;

app.use(session({secret:"fingerpint",resave: true, saveUninitialized: true}))

app.use(express.json());

// Middleware definition for handling requests under the "/user" path
app.use("/user", (req,res,next)=>{
    // Check if there is an accessToken stored in the session's authorization
    if(req.session.authorization) {
        // Extract the accessToken from the session
        let token = req.session.authorization['accessToken'];

        // Verify the accessToken using JWT with the "access" secret key
        jwt.verify(token, "access", (err,user)=>{
            // If there's no error, set the user data on the request object and call the next middleware
            if(!err){
                req.user = user;
                next();
            }
            else{
                // Return a 403 status with a JSON response if verification fails, indicating user is not authenticated
                return res.status(403).json({message: "User not authenticated"})
            }
        });
    } else {
        // Return a 403 status with a JSON response if there's no accessToken in the session, indicating user is not logged in
        return res.status(403).json({message: "User not logged in"})
    }
});


app.use("/user", routes);

// Define a route handler for POST requests to the "/login" endpoint
app.post("/login", (req,res) => {
    // Extract the user object from the request body
    const user = req.body.user;
    // Check if the user object exists in the request body
    if (!user) {
        // Return a 404 status with a JSON response if the user object is empty
        return res.status(404).json({message: "Body Empty"});
    }
    // Generate an access token using JWT with the user data, set to expire in 1 hour
    let accessToken = jwt.sign({
        data: user
      }, 'access', { expiresIn: 60 * 60 });

    // Store the accessToken in the session's authorization object
    req.session.authorization = {
        accessToken
    }
    // Return a 200 status with a plain text response indicating successful login
    return res.status(200).send("User successfully logged in");
});


app.listen(PORT,()=>console.log("Server is running at port "+PORT));
