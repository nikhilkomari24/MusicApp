module.exports = (app) => {
    const admin = require('../controllers/admin.controller.js');

    
    app.post('/admin/addsong', admin.add); // add a new song

    app.get('/admin/userlist', admin.userlist); //to retrieve user list

    app.delete('/admin/delreview', admin.delreview); // remove review of a song

    app.delete('/admin/delsong', admin.del); //remove a song from list
    
    app.put('/admin/hidesong', admin.hide); //hide a particular song
    
    app.put('/admin/edituserstatus', admin.deactivate); // change status of user to deactivate

    app.put('/admin/editusertype', admin.changetype); // change status of user to deactivate
    
    app.get('/admin/songlist', admin.getsong); // get song list for admin
    
    app.put('/admin/editsong', admin.update); // edit song metadata

    

 
}