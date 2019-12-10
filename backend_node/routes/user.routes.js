module.exports = (app) => {
    const user = require('../controllers/user.controller.js');
    const checkrequest=require('../authmiddleware/authentication.js');

    app.post('/user/login',checkrequest.checklogin,user.checkuser); //validate user login
    
    app.post('/user/signup',checkrequest.checksignup,user.signup); //user signup
    
}