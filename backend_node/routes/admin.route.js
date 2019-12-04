module.exports = (app) => {
    const admin = require('../controllers/admin.controller.js');

    // add a new song
    app.post('/admin/addsong', admin.add);

    //remove a song from list
    app.delete('/admin/delsong', admin.del);

    //hide a particular song
    app.put('/admin/song/hidesong', admin.hide);

    // edit song metadata
    app.put('/admin/editsong', admin.update);

    // remove review of a song
    app.delete('/admin/delreview', admin.delreview);

    // change status of user to deactivate
    app.put('/admin/edituser', admin.deactivate);

    // get song list for admin
    app.get('/admin/songlist', admin.getsong);

 
}