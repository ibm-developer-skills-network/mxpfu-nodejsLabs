const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email: "johnwick@gamil.com",
        DOB: "22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email: "johnsmith@gamil.com",
        DOB: "21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email: "joyalwhite@gamil.com",
        DOB: "21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
    // Copy the code here
    res.send(JSON.stringify({users}, null, 4));
});

// Function to convert a date string in the format "dd-mm-yyyy" to a Date object
function getDateFromString(strDate) {
    let [dd, mm, yyyy] = strDate.split('-');
    return new Date(yyyy + "/" + mm + "/" + dd);
}

// GET request: Retrieve all users sorted by DOB
router.get("/sort", (req, res) => {
    // Copy the code here
    const sortedUsers = users.sort(function(a, b) {
        let d1 = getDateFromString(a.DOB);
        let d2 = getDateFromString(b.DOB);
        return d1 - d2;
    });
    res.send(JSON.stringify({sortedUsers}, null, 4));
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
    // Extract the email parameter from the request URL
    const email = req.params.email;

    // Search the users array for a matching email
    const user = users.find(u => u.email === email);

    // Return the user if found, otherwise send a 404 error
    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }
});

// GET by last name request: Retrieve a single user with last name
router.get("/lastName/:lastName", (req, res) => {
    // Extract the email parameter from the request URL
    const lastName = req.params.lastName;

    // Search the users array for a matching email
    const user = users.filter(u => u.lastName=== lastName);

    // Return the user if found, otherwise send a 404 error
    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }
});


// POST request: Create a new user
router.post("/", (req, res) => {
    // Copy the code here
    // Extract the parameters
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const dob = req.body.DOB;

    let newUser = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "DOB": dob
    }

    users.push(newUser);


    res.send(users)//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
    // Extract email parameter and find users with matching email
    const email = req.params.email;
    let filtered_users = users.filter((user) => user.email === email);

    if (filtered_users.length > 0) {
        // Select the first matching user and update attributes if provided
        let filtered_user = filtered_users[0];

        // Extract and update DOB if provided

        let DOB = req.query.DOB;
        if (DOB) {
            filtered_user.DOB = DOB;
        }

        /*
        Include similar code here for updating other attributes as needed
        */

        // Extract and update first name if provided

        let firstName = req.query.firstName;
        if (firstName) {
            filtered_user.firstName = firstName;
        }

        // Extract and update last name if provided

        let lastName = req.query.lastName;
        if (lastName) {
            filtered_user.lastName = last;
        }
        // Replace old user entry with updated user
        users = users.filter((user) => user.email != email);
        users.push(filtered_user);

        // Send success message indicating the user has been updated
        res.send(`User with the email ${email} updated.`);
    } else {
        // Send error message if no user found
        res.send("Unable to find user!");
    }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
    // Extract the email parameter from the request URL
    const email = req.params.email;
    // Filter the users array to exclude the user with the specified email
    users = users.filter((user) => user.email != email);
    // Send a success message as the response, indicating the user has been deleted
    res.send(`User with the email ${email} deleted.`);
});

module.exports = router;
