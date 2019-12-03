const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    Title: { type: String, required: true },
    Ratings: { type: Number, required: true},
    Artist:{ type: String, required: true },
    Album:{ type: String, required: true },
    Duration:{ type: Number, required: true },
    Year:{ type: Number, required: true },
    Genre:{ type: String, required: true     },
    Comment: { type: String, default: "" },
    Hidden:{ type: Boolean, default: false },
    Picture:{ type: String, default: "" }
}, {
    versionKey: false // avoiding versioning (inserts new field having version number)
});

module.exports = mongoose.model('Song', SongSchema, 'Song');