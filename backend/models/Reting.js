


const mongoose = require('mongoose');

const RetingSchema = mongoose.Schema({
    rating: {type: Number, required: true,},
    review: {type: String, required: true,},
});

const Reting = mongoose.model("Reting", RetingSchema);

module.exports = Reting ;