const express = require('express');
const routes = require('./routes/users.js');
const jwt = require('jsonwebtoken');
const app = express();
const PORT =5000;
app.use(express.json());
function auth(req,res,next){
// Middleware which tells that the user is authenticated or not
   let token = req.headers["authorization"];
   token = token.split(" ")[1]; // Access Token
   jwt.verify(token, "access",(err,user)=>{
       if(!err){
           req.user = user;
           next();
       }
       else{
           return res.status(403).json({message: "User not authenticated"})
       }
});
}
app.post("/protected", auth , (req,res)=> {
    res.send("Access token authenticated!!");
});
app.post("/login", (req,res) => {
    const user = req.body.user;
    if (!user) {
        return res.status(404).json({message: "Body Empty"});
    }
    let accessToken = jwt.sign(user ,"access", {expiresIn: '60s'});
    let refreshToken = jwt.sign(user,"refresh", {expiresIn:'7d'});
    return res.status(201).json({
        accessToken,
        refreshToken
    })
});
app.use("/user", routes);
app.listen(PORT,()=>console.log("Server is running"));
