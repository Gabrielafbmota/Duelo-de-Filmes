import mongoose from 'mongoose'

const APSchema = new mongoose.Schema({
    apId: {type: String, required: true, index: true},
    nome: String,
    coordenadaX: Number,
    coordenadaY: Number,
    coordenadaZ: Number,
})
module.exports = mongoose.model('AccessPoint', APSchema)