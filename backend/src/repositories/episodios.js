import EpisodiosSchema from '../models/episodios'
import cuid from 'cuid'

export async function store({ nome, episodio_url, episodio_image, episodio_description }){
    const newAP = new EpisodiosSchema ({
        apId: cuid(),
        nome,
        episodio_url,
        episodio_image,
        episodio_description
    })

    return newAP.store()
}

export async function findAll() {
  return EpisodiosSchema.find()
}
