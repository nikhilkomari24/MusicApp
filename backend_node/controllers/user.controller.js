var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const crypto = require('crypto');
const saltnum = 10000;
const keylength = 512;
const algorithm = 'sha512';
const tokenexp = "30m"
const User = require('../models/user.model.js');


exports.signup = (req, res) => {

    User.findOne({ email: req.body.email })
        .then(data => {
            if (data) {
                return res.status(200).send({ message: "Username already registered. Please Log in" })
            }
            else {
                let salt = crypto.randomBytes(16).toString('hex');
                let hash = crypto.pbkdf2Sync(req.body.password, salt, saltnum, keylength, algorithm).toString('hex');
                var userObj = {
                    "username": req.body.username,"password": hash,"salt": salt,"email": req.body.email,"emailverified": false,"usertype": "user","signupmethod": "registration"
                };
                const user = new User(userObj);
                user.save()
                    .then(data => {
                        var objToken = {
                            "id": data["_id"],"name": userObj.username,"userType": data["usertype"]
                        }
                        let token = jwt.sign(objToken, req.secret, { expiresIn: tokenexp });
                        res.send({ "statusCode": 200, "result": objToken, "WWW-Authenticate": token });
                    })
                    .catch(err => {
                        res.send({
                            message: err.message || "An error occured while signing up"
                        })
                    });
            }
        })
        .catch(err => {
            res.send({
                message: err.message || "An error occured while signing up"
            })
        });

};

exports.checkuser = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(data => {
            if (!data) return res.send({ "statusCode": 404, message: "Please enter valid username/password" })
            if (!data["active"]) return res.send({ statusCode: 400, message: "Account deactivated, please contact admin" })

            const hash = crypto.pbkdf2Sync(req.body.password, data.salt, saltnum, keylength, algorithm).toString('hex');
            if (hash == data.password) {
                var objToken = {
                    "id": data["_id"],"name": data.username,"userType": data["usertype"]
                }
                let token = jwt.sign(objToken, req.secret, { expiresIn: tokenexp });
                res.send({ "statusCode": 200, "result": objToken, "WWW-Authenticate": token });
            }
            else return res.send({ statusCode: 400, message: "Please enter valid username/password" })
        })
        .catch(err => {
            res.send({
                message: err.message || "An error occured while logging in"
            })
        });
};