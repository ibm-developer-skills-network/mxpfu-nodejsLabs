const express = require('express');
const routes = require('./routes/users.js');

const app = express();
const PORT =5000;

app.use(express.json()); //JWT/middleware creation

app.use("/user", routes); //using routes to handle the endpoint which will start
                        //with '/user'. meaning all endpoints startubg with /user,
                        //server will go back and look for endpoint handler in users.js

app.listen(PORT,()=>console.log("Server is running at port "+PORT));