module.exports = (app) => {
    const secure = require('../controllers/secure.controller.js');

    // adding a new song
    app.post('/secure/addsong', secure.addbyuser);

    // adding a rating
    app.post('/secure/addrating', secure.addrating);

    // adding a review
    app.post('/secure/addreview', secure.addreview);

    // creating a playlist
    app.post('/secure/createplaylist', secure.createpl);

    //changing title and description only by owner
    app.put('/secure/editplaylist', secure.editpl);

    //adding a song to playlist
    app.put('/secure/playlist/addsong', secure.addsongpl);

    //removing a song from playlist
    app.delete('/secure/playlist/removesong', secure.remsongpl);

    // hiding a playlist
    app.put('/secure/hideplaylist', secure.hidepl);

}
