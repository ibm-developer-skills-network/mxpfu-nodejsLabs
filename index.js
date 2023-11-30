const express = require('express');
const routes = require('./routes/users.js');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/user", routes);

app.listen(PORT, () => {
    console.log("Server is running at port " + PORT);
}).on('error', (err) => {
    console.error("Server failed to start:", err);
});
