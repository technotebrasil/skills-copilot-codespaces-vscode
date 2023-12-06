// Create web server
// 1. Create a web server
// 2. Create a route for /comments
// 3. Return a list of comments in JSON format
// 4. Start the server

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a route for /comments
app.get('/comments', (req, res) => {
    // 3. Return a list of comments in JSON format
    const comments = [
        { name: 'John', comment: 'Hello' },
        { name: 'Mary', comment: 'How are you?' },
        { name: 'Joe', comment: 'Goodbye' }
    ];
    res.json(comments);
});

// 4. Start the server
app.listen(port, () => console.log(`Server listening on port ${port}!`));