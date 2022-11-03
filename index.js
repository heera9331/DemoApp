const express = require('express');


const app = express();

app.get('/', function(req, res) {
    res.send('Heera Singh Lodhi');

    res.end()
});

// Establishing the port
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('Server has been started on port: 3000');
})
