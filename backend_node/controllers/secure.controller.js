const Song = require('../models/song.model.js');
const Review = require('../models/review.model.js');
const Rating = require('../models/rating.model.js');
const Playlist = require('../models/playlist.model.js');

var mongoose = require('mongoose');

exports.songsearch = (req, res) => {
    var word = req.params.keyword
    console.log('word:', word)
    Song.find({
        $or: [
            { Title: { '$regex': word, '$options': 'i' } },{ Album: { '$regex': word, '$options': 'i' } },            
            { Artist: { '$regex': word, '$options': 'i' } },{ Year: { '$regex': word, '$options': 'i' } },            
            { Genre: { '$regex': word, '$options': 'i' } }
        ]
    })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        });
};// Retrieve selected song from the database.

exports.getsong = (req, res) => {
    console.log('entered get by guest')
    Song.find({Hidden : false}).sort('-Ratings')
    .then(songs => {
        res.send(songs);
        console.log('response received')
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving songs."
        });
    });
}; // Retrieve songs from the database.

exports.getsongdata = (req, res) => {

    var songID = req.params.songID
    Song.find({ _id: songID, Hidden: false })
        .then(songs => {
            res.send(songs)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving song data."
            })
        });
};// Retrieve song data from the database.

exports.getsongreview = (req, res) => {
    var songID = req.params.songID

    Review.find({ songid: songID })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving song review."
            })
        });
};// Retrieve song review from the database.

exports.addbyuser = (req, res) => {
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

};//adding a new song by user

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
};// adding a rating by user

exports.addreview = (req, res) => {
    console.log('enter add review')
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
};// adding a review by user


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
};// creating a playlist by user


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
};//editing of a song title and desc by user


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