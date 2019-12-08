module.exports = (app) => {
    const user = require('../controllers/user.controller.js');
    const checkrequest=require('../authmiddleware/authentication.js');

    //validate user login
    app.post('/user/login',checkrequest.checklogin,user.checkuser);
    
    //user signup
    app.post('/user/signup',checkrequest.checksignup,user.signup);
    
}