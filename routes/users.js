const express = require('express');
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
    {
        firstName: "Jack",
        lastName: "Daniel",
        email:"jackdaniel@gamil.com",
        DOB:"15-11-1985",
    }
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(users); //This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Extract email from request parameters
  const email = req.params.email;
  //filter user array to find user with matching email
  let filtered_users = users.filter((user) => user.email === email);
  // Send the filtered_users as response
  res.send(filtered_users); //This line is to be replaced with actual return value

});

// POST request: Create a new user
router.post("/",(req,res)=>{
  // Push the new user data from request body to users array
  users.push({
    "firstName": req.query.firtName,
    "lastName": req.query.lastName,
    "email": req.query.email,
    "DOB": req.query.DOB
  });
  // Send a success message as response
  res.send("The user"  +  req.query.firstName + " has been added successfully!!")//This line send a success message as response for adding new user
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Extract email from request parameters
  const email = req.params.email;
  let filtered_user = users.filter((user) => user.email === email);

  if (filtered_user.length > 0) {
    // Select the first matched user and update details
    let filtered_users = filtered_user[0];

    //Extract  and update DOB if provided
    let DOB = req.query.DOB;
    if (DOB) {
      filtered_user.DOB = DOB;
    }
    //Extract and update lastName if provided
    let lastName = req.query.lastName;
    if (lastName) {
      filtered_user.lastName = lastName;
    }
    //Extract and update firstName if provided
    let firstName = req.query.firstName;
    if (firstName) {
      filtered_user.firstName = firstName;
    }
    //Extract and update email if provided
    let newEmail = req.query.email;
    if (newEmail) {
      filtered_user.email = newEmail;
    }
    
    //Replace the old user data with updated user data in users array
    users = users.filter((user) => user.email !== email);
    users.push(filtered_user);

    // Send a success message indicating user details have been updated
    res.send(`User with email ${email} has been updated successfully.`);
  } else {
    //Send a error message if user not found
    res.send("User not found.");
  }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  //Extract email from request parameters
  const email = req.params.email;
  //Filter users array to remove user with matching email
  users = users.filter((user) => user.email !== email);
  //Send a success message indicating user has been deleted

  res.send(`User with the email ${email} has been deleted.`);
});

module.exports=router;
