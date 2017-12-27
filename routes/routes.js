const path = require('path');

module.exports = function (app) {
    app.get('/notes', (req, res) => {
        res.json('[{"title\": "test", "date": '+ new Date() +'}]');
    });
};