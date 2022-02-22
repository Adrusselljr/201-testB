const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({

    title: {
        type: String
    },

    director: {
        type: String
    },

    runtime: {
        type: Number
    },

    rating: {
        type: Number
    },

    description: {
        type: String
    }

}, {timestamps: true })

module.exports = mongoose.model("movie", MovieSchema)