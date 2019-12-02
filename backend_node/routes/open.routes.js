module.exports = (app) => {
    const open = require('../controllers/open.controller.js');

    // Get song list for open/unauthenticated users
    app.get('/open/song', open.getsong);

}