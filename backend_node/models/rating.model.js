var mongoose     = require('mongoose');

var RatingSchema   = mongoose.Schema({
    songid: { type: mongoose.Schema.ObjectId, required: true },
    username:{ type: String, required: true },
    rating:{ type: Number, required: true }
}, {
    versionKey: false // avoiding versioning (inserts new field having version number)
});

module.exports = mongoose.model('Rating', RatingSchema);