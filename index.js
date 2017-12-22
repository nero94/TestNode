const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'client/my-app/src')));

require('./routes')(app);
app.listen(port, () => {
    console.log('We are live on ' + port);
});