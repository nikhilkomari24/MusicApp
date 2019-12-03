const Song = require('../models/song.model.js');
const Review = require('../models/review.model.js');
const Rating = require('../models/ratings.model.js');


// Retrieve songs from the database.
exports.getsong = (req, res) => {
    Song.find()
    .then(songs => {
        res.send(songs);
        console.log('response received')
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving songs."
        });
    });
};

// Retrieve selected song from the database.
exports.search = (req, res) => {

};

// Retrieve song review from the database.
exports.getsongreview = (req, res) => {
    var songID = req.params.songID

    Review.find({ songId: songID })
        .then(reviews => {
            res.send(reviews)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving song review."
            })
        });
};

// Retrieve song data from the database.
exports.getsongdata = (req, res) => {

    var songID = req.params.songID
    Song.find({ _id: songID, Hidden: false })
        .select('-_id')
        .then(songs => {
            res.send(songs)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving song data."
            })
        });
};

// Retrieve song rating from the database.
exports.getsongrating = (req, res) => {
    var songId = req.params.songID
    Rating.aggregate([
        { $match: { "songID": songId } },
        {
            $group: {
                _id: null,
                average: {
                    $avg: "$ratings"
                }
            }
        }
    ])
        .then(songs => {
            res.send({ message: songs[0]["average"] })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving song rating."
            })
        });
};


