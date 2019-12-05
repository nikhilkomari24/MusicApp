var mongoose = require('mongoose');

var PlaylistSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    ownerid: { type: mongoose.Schema.ObjectId, required: true },
    songid: { type: [mongoose.Schema.ObjectId], required: true },
    hidden: { type: Boolean, default: false }
}, {
    versionKey: false // avoiding versioning (inserts new field having version number)
});

module.exports = mongoose.model('Playlist', PlaylistSchema);