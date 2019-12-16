module.exports = (app) => {
    const open = require('../controllers/open.controller.js');

    
    app.get('/open/songlist', open.getsong); // get song list for open/unauthenticated users
    
    app.get('/open/searchsong/:keyword', open.songsearch); // search for a song
    
    app.get('/open/songrating/:songID', open.getsongrating); // get a song's rating
    
    app.get('/open/songdata/:songID', open.getsongdata); //get a song's data
    
    app.get('/open/songreview/:songID', open.getsongreview);  //get a song's review       

}