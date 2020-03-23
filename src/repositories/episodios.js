import EpisodiosSchema from '../models/episodios'
import cuid from 'cuid'

export async function store({ nome }){
    const newAP = new EpisodiosSchema ({
        apId: cuid(),
        nome
    })

    return newAP.store()
}

export async function findAll() {
  return EpisodiosSchema.find()
}
