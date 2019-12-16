const Song = require('../models/song.model.js');
const Review = require('../models/review.model.js');
const Rating = require('../models/rating.model.js');


exports.getsong = (req, res) => {
    console.log('entered get by guest')
    Song.find({Hidden : false}).sort('-Ratings').limit(10)
    .then(songs => {
        res.send(songs);
        console.log('response received')
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving songs."
        });
    });
}; // Retrieve songs from the database.


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


exports.getsongrating = (req, res) => {
    var songID = req.params.songID
    Rating.aggregate([
        { $match: { "songid": songID } },
        {
            $group: {
                _id: null,
                average: {
                    $avg: "$rating"
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
};// Retrieve song rating from the database.


