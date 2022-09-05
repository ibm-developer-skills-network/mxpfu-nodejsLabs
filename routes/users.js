import express from "express";
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

router.get("/",(req,res)=>{
// Copy the code here
});

router.get("/:email",(req,res)=>{
// Copy the code here
});


router.post("/new/",(req,res)=>{
// Copy the code here
});

router.put("/:email", (req, res) => {
// Copy the code here
  });

router.delete("/:email", (req, res) => {
// Copy the code here
  });


export default router;
