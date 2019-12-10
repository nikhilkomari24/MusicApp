const Song = require('../models/song.model.js');
const Review = require('../models/review.model.js');
const Rating = require('../models/rating.model.js');
const Playlist = require('../models/playlist.model.js');

var mongoose = require('mongoose');

// //need to change this here and everywhere
// function generateKeyValueFromBody(body) {
//     const entries = Object.keys(body)
//     const inserts = {}
//     for (let i = 0; i < entries.length; i++) {
//         inserts[entries[i]] = Object.values(body)[i]
//     }
//     return inserts;
// }

//adding a new song by user
exports.addbyuser = (req, res) => {
    // console.log('entered add song by user')
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
                message: err.message || "Some error occurred while adding a new song by user."
            })
        });

};

// adding a rating by user
exports.addrating = (req, res) => {
    const inserts = generateKeyValueFromBody(req.body)
    var songID =  mongoose.Types.ObjectId(inserts["songid"])
    Rating.create(inserts)
        .then(data => {
            if (Boolean(data["_id"])) {
                res.status(200).send({ message: "true" })
            }
            else {
                res.status(500).send({ message: songID })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: songID
            })
        });
};
// adding a review by user
exports.addreview = (req, res) => {
    console.log('enter add review')
    // const inserts = generateKeyValueFromBody(req.body)
    // var songID =  mongoose.Types.ObjectId(inserts["songid"])
    // console.log(songID)
    Review.create(req.body)
        .then(data => {
            if (Boolean(data["_id"])) {
                res.status(200).send({ message: "true" })
            }
            else {
                res.status(500).send({ message: err  })
            }
        })
        .catch(err => {
            res.status(500).send({ message: err  })
        });
};

// creating a playlist by user
exports.createpl = (req, res) => {

    const inserts = generateKeyValueFromBody(req.body)

    Playlist.create(inserts)
        .then(data => {
            if (Boolean(data["_id"])) {
                res.status(200).send({ message: data["_id"] })
            }
            else {
                // didnt insert 
                res.status(500).send({ message: "false" })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a new playlist by user."
            })
        });
};

//editing of a song title and desc by user
exports.editpl = (req, res) => {
    const updates = generateKeyValueFromBody(req.body)
    var playlistid = updates.playListID
    var ownerid = updates.ownerID

    delete updates.playListID
    delete updates.ownerID

    Playlist.updateOne({ _id: playlistid, ownerid: ownerid }, { $set: updates })
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
                message: err.message || "Some error occurred while editing playlist title and desc by user."
            })
        });
};

exports.addsongpl = (req, res) => {
    var playlistid = req.body.playListID
    var songid = req.body.songID
    var ownerid = req.body.ownerID

    Playlist.updateOne({ _id: playlistid, ownerid: ownerid }, { "$push": { "songid": songid } })
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
                message: err.message || "Some error occurred while adding a song to playlist by user."
            })
        });
};

exports.remsongpl = (req, res) => {
    var playlistid = req.body.playListID
    var songid = req.body.songID
    var ownerid = req.body.ownerID

    Playlist.updateOne({ _id: playlistid, ownerid: ownerid }, { "$pull": { "songid": songid } })
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
                message: err.message || "Some error occurred while removing a song from playlist by user."
            })
        });
};

exports.hidepl = (req, res) => {
    var playlistid = req.body.playListID
    var hidden = req.body.hidden
    var ownerid = req.body.ownerID
    Playlist.updateOne({ _id: playlistid, ownerid: ownerid }, { $set: { hidden: hidden } })
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
                message: err.message || "Some error occurred while hiding a playlist by user."
            })
        });
};