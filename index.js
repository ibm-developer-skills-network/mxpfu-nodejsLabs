const express = require('express');

const routes = require('./routes/users.js');

// const jwt = require('jsonwebtoken');


const app = express();
const PORT =5000;


app.use("/user", function (req, res, next) {

    console.log('The user is logged in! Time:', Date.now())
    next();
});

app.use("/user", routes);

app.listen(PORT,()=>console.log("Server is running"));
