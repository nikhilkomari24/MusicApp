module.exports = (app) => {
    const open = require('../controllers/open.controller.js');

    // get song list for open/unauthenticated users
    app.get('/open/songlist', open.getsong);

    // search for a song
    app.get('/open/searchsong', open.search);

    // get a song's rating
    app.get('/open/songrating/:songID', open.getsongrating);

    //get a song's data
    app.get('/open/songdata/:songID', open.getsongdata);

    //get a song's review
    app.get('/open/songreview/:songID', open.getsongreview);   
    

}