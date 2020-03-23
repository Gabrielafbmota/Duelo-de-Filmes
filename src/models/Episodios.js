import mongoose from 'mongoose'
const PointSchema = require('./utils/PointSchema')

const APSchema = new mongoose.Schema({
    apId: {type: String, required: true, index: true},
    nome: String,
    position: {type: PointSchema}
})
module.exports = mongoose.model('episodios', APSchema)