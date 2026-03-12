const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Student Details</h1>
        <p><b>Name:</b>Jaddu Tejaswi</p>
        <p><b>Roll Number:</b> 2023BEC0058</p>
       
    `);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});