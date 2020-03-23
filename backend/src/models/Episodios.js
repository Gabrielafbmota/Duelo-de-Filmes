import mongoose from 'mongoose'

const EpisodiosSchema = new mongoose.Schema({
    id: {type: String, required: true, index: true},
    nome: String,
    episodio_url: String,
    episodio_image: String,
    episodio_description: String,
    tema: String
})
module.exports = mongoose.model('episodios', EpisodiosSchema)