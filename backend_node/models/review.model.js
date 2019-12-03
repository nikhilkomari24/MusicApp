const mongoose     = require('mongoose');

const Reviewschema   = mongoose.Schema({
    songid: { type: String, required: true },
    review:{ type: String, required: true },
    reviewby:{ type: String, required: true }
}, {
    versionKey: false // avoiding versioning (inserts new field having version number)
});

module.exports = mongoose.model('Review', Reviewschema);