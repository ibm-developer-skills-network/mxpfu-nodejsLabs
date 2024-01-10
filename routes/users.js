const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "Shreyas",
        lastName: "Suryawanshi",
        email:"johnwick@gamil.com",
        DOB:"22-04-1997",
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
// sorting users via date of birth
function getDateFromString(strDate) {
  let [dd,mm,yyyy] = strDate.split('-')
  return new Date(yyyy+"/"+mm+"/"+dd);
}
// GET request: Retrieving all users
router.get("/",(req,res)=>{
  res.send(JSON.stringify({users},null,4)); //get method for getting the details of all users
});

// Get users with lastname
    router.get("/:lastName",(req,res)=>{
      const lastName = req.params.lastName;
      let filtered_lastname = users.filter((user) => user.lastName === lastName);
      res.send(filtered_lastname);
  });

// GET by specific ID request: Retrieving a single user with email ID
router.get("/:email",(req,res)=>{
  const email = req.params.email;
  let filtered_users = users.filter((user)=>user.email === email);
  res.send(filtered_users); //filtered users so that they have a valid email address
});


// POST request: Creating a new user using POST request
router.post("/",(req,res)=>{
  users.push({"firstName":req.query.firstName,
  "lastName":req.query.lastName,
  "email":req.query.email,
  "DOB":req.query.DOB //pushing all users using req.query.params method for creating a user from client side
});
res.send('The user' + (' ') + (req.query.firstName)+ " Has been added into directory!");
});


  
// console.log(sorted_users);
router.get("/sort",(req,res)=>{
  let sorted_users=users.sort(function(a, b) {
      let d1 = getDateFromString(a.DOB);
      let d2 = getDateFromString(b.DOB);
          return d1-d2;
        });
  res.send(sorted_users);
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let filtered_users = users.filter((user)=>user.email === email);
  if(filtered_users.length>0){
    let filtered_user = filtered_users[0];
    let DOB = req.query.DOB;
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    // if DOB is changed
    if(DOB){
      filtered_user.DOB=DOB;
    }
    if(firstName){
      filtered_user.firstName = firstName;
    }
    if(lastName){
      filtered_user.lastName = lastName;
    }
    users= users.filter((user)=>user.email != email);
    users.push(filtered_user);
    res.send(`User with the email ${email} is updated`);
  }
  else{
    res.send("Unable to find the specified user");
  }
});


// DELETE request: Deleting a user by email ID
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  users = users.filter((user)=>user.email != email);
  res.send(`User with the email ${email} has been deleted`)
});

module.exports=router;
