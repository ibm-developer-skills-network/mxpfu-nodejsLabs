const express = require('express');

const router = express.Router();

let users = [
    {
        firstName: "John",
        lastName: "Doe",
        email:"johndoe@gamil.com",
        DOB:"22-12-1990",
    },
    {
        firstName: "Anna",
        lastName: "smith",
        email:"annasmith@gamil.com",
        DOB:"02-07-1983",
    },
    {
        firstName: "Peter",
        lastName: "Jones",
        email:"peterjones@gamil.com",
        DOB:"21-03-1989",
    },
];


router.get('/',function (req, res) {
//Add the code here
});

router.get("/:email",function (req,res){
//Add the code here
});

router.post("/new/",function (req,res){
//Add the code here
});
  
router.put("/:email", function (req, res) {
//Add the code here
  });


router.delete("/:email", (req, res) => {
//Add the code here
});

  module.exports=router;
