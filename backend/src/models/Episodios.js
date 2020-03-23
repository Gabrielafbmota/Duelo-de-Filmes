import mongoose from 'mongoose'

const EpisodiosSchema = new mongoose.Schema({
    apId: {type: String, required: true, index: true},
    nome: String,
    episodio_url: String,
    episodio_image: String,
    episodio_description: String
})
module.exports = mongoose.model('episodios', EpisodiosSchema)