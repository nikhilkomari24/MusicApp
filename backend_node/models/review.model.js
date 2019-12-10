const mongoose     = require('mongoose');

const Reviewschema   = mongoose.Schema({
    songid: { type: mongoose.Schema.ObjectId, required: true },
    song: {type: String, required: true},
    review:{ type: String, required: true },
    reviewby:{ type: String, required: true },
    rating:{ type: String, required: true}
}, {
    versionKey: false // avoiding versioning (inserts new field having version number)
});

module.exports = mongoose.model('Review', Reviewschema, 'Review');