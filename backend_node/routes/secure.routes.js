module.exports = (app) => {
    const secure = require('../controllers/secure.controller.js');

    
    app.post('/secure/addsong', secure.addbyuser); // adding a new song
    
    app.post('/secure/addrating', secure.addrating); // adding a rating
    
    app.post('/secure/addreview', secure.addreview); // adding a review

    app.post('/secure/createplaylist', secure.createpl); // creating a playlist

    app.put('/secure/editplaylist', secure.editpl); //changing title and description only by owner

    app.put('/secure/playlist/addsong', secure.addsongpl); //adding a song to playlist

    app.delete('/secure/playlist/removesong', secure.remsongpl); //removing a song from playlist

    app.put('/secure/hideplaylist', secure.hidepl); //removing a song from playlist

}
