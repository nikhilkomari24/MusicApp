const Song = require('../models/song.model.js');
const Review = require('../models/review.model.js');
const Rating = require('../models/rating.model.js');
const User = require('../models/user.model.js');

///need to change this here and everywhere
// function generateKeyValueFromBody(body) {
//     const entries = Object.keys(body)
//     const inserts = {}
//     for (let i = 0; i < entries.length; i++) {
//         inserts[entries[i]] = Object.values(body)[i]
//     }
//     return inserts;
// }

exports.add = (req, res) => {
    // const inserts = generateKeyValueFromBody(req.body)
    Song.create(req.body)
        .then(data => {
            if (Boolean(data["_id"])) {
                res.status(200).send({ message: data["_id"] })
            }
            else {
                res.status(500).send({ message: "false" })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while adding a new song."
            })
        });

};

exports.del = (req, res) => {
    var songID = req.body.songID

    Song.deleteOne({ _id: songID })
        .then(data => {
            if (Boolean(data["deletedCount"])) {

                res.status(200).send({ message: "success" })
            }
            else {
                res.status(200).send({ message: "false" })
            }

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting a song."
            })
        });
};

exports.hide = (req, res) => {
    // var songID = req.body.songID
    // var hidden = req.body.hidden
    Song.updateOne({ _id: req.body.songid }, { $set: { Hidden: req.body.hidden } })
        .then(data => {
            if (Boolean(data["nModified"])) {

                res.status(200).send({ message: "success" })
            }
            else {
                res.status(200).send({ message: "false" })
            }

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while hiding a song."
            })
        });

};

exports.update = (req, res) => {
    const inserts = generateKeyValueFromBody(req.body)
    var songid = inserts.songID
    delete inserts.songID
    Song.updateOne({ _id: songid }, { $set: inserts })
        .then(data => {
            if (Boolean(data["nModified"])) {
                res.status(200).send({ message: "true" })
            }
            else {
                res.status(500).send({ message: "false" })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while editing song details."
            })
        });
}

exports.delreview = (req, res) => {
    var reviewid = req.body.reviewid

    Review.deleteOne({ _id: reviewid })
        .then(data => {
            if (Boolean(data["deletedCount"])) {

                res.status(200).send({ message: "success" })
            }
            else {
                res.status(200).send({ message: "false" })
            }

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting a song review."
            })
        });
};


exports.deactivate = (req, res) => {

    User.updateOne({ _id: req.body.userid }, { $set: { active: req.body.status } })
        .then(data => {
            if (Boolean(data["nModified"])) {
                res.status(200).send({ message: "true" })
            }
            else {
                // didnt insert 
                res.status(500).send({ message: "false" })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deactivating a user."
            })
        });
};

exports.changetype = (req, res) => {

    var userid = req.body.userid
    var type = req.body.usertype
    console.log(type)
    console.log(userid)
    if (type) {
        type = "SM"
    }
    else {
        type = "user"
    }
    console.log(type)
    User.updateOne({ _id: userid }, { $set: { usertype: type } })
        .then(data => {
            console.log(data)
            if (Boolean(data["nModified"])) {
                res.status(200).send({ message: "true" })
            }
            else {
                // didnt insert 
                res.status(500).send({ message: "false" })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deactivating a user."
            })
        });
};

exports.getsong = (req, res) => {
    Song.find()
        .then(data => { res.send({ list: data }) })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching song list."
            })
        });
}

exports.userlist = (req, res) => {
    User.find()
        .then(data => { res.send({ list: data }) })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching song list."
            })
        });
}