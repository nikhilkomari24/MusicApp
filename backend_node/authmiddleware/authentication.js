const jwt = require('jsonwebtoken');
require('dotenv').config()
const secret = process.env.JWT_KEY;
if (typeof secret === 'undefined') {
    console.log("Please set secret as environment variable. E.g. JWT_KEY=\"Open Sesame\" node index");
    process.exit(1);
}
function generateKeyValueFromBody(body) {
    const entries = Object.keys(body)
    const inserts = {}
    for (let i = 0; i < entries.length; i++) {
        inserts[entries[i]] = Object.values(body)[i]
    }
    return inserts;
}


function signupcheck(req, res, next) {
    var exports = generateKeyValueFromBody(req.body)
    if (!exports.email) return res.send({ message: "invalid request" })
    if (!exports.username) return res.send({ message: "invalid request" })
    if (!exports.password) return res.send({ message: "invalid request" })

    req.secret=secret
    next();
}

function checktoken(req, res, next){
    var bearerHeader=req.headers["Authorization"]
    if(typeof bearerHeader==undefined) return res.status(500).send({message:"invalid request"})
    var reqToken=bearerHeader.split(' ')[1]
    jwt.verify(reqToken,secret,(err,decoded)=>{
        if(err) return res.status(500).send({message:"invalid request"})
        req.secret=secret;
        req.token=reqToken;
        next();
    });

}

function logincheck(req, res, next){
    var exports = generateKeyValueFromBody(req.body)
    if (!exports.email) return res.send({ message: "invalid request" })
    if (!exports.password) return res.send({ message: "invalid request" })


    req.secret=secret
    next();
}

module.exports =  {

    checksignup:signupcheck,
    CheckToken:checktoken,
    checklogin:logincheck
    
};