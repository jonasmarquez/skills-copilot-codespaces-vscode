// Create web server
const express = require('express');
const app = express();
// Create a port
const port = 3000;
// Create a route
app.get('/comments', (req, res) => {
    res.send('comments');
});
// Listen to the port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});