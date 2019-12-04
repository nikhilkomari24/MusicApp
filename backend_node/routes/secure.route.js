module.exports = (app) => {
    const secure = require('../controllers/secure.controller.js');

    // adding a new song
    app.post('/secure/addsong', secure.add);

    // adding a rating
    app.post('/secure/addrating', secure.addrating);

    // adding a review
    app.post('/secure/addreview', secure.addreview);    

}