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

// GET request: Retrieve all users
router.get("/",(req,res)=>{
// Copy the code here
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
// Copy the code here
});


// POST request: Create a new user
router.post("/new/",(req,res)=>{
// Copy the code here
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
// Copy the code here
  });


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
// Copy the code here
  });


export default router;
