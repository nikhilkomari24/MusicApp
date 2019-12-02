const Song = require('../models/song.model.js');


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

