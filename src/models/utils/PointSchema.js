const mongoose = require('mongoose')

const PointSchema = new mongoose.Schema({
    coordenadaX: Number,
    coordenadaY: Number,
    coordenadaZ: Number,
})

module.exports = PointSchema