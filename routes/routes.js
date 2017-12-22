const path = require('path');

module.exports = function (app) {
    app.get('/notes', (req, res) => {
        res.send('Hello');
    });
    app.get('/aaa', (req, res) => {
        res.sendFile("client/my-app/src/index.html", {root: path.join(__dirname, '../')});
    });
};