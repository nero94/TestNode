const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

// set sratic resource path
app.use(express.static(path.join(__dirname, 'my-app/dist')));

require('./routes')(app);
app.listen(port, () => {
    console.log('We are live on ' + port);
});