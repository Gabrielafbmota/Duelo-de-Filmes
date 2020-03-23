import mongoose from 'mongoose'

const EpisodiosSchema = new mongoose.Schema({
    apId: {type: String, required: true, index: true},
    nome: String,
})
module.exports = mongoose.model('episodios', EpisodiosSchema)