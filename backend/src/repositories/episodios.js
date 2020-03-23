import EpisodiosSchema from '../models/episodios'
import cuid from 'cuid'

export async function save({ nome, episodio_url, episodio_image, episodio_description, tema }){
    const newEpisode = new EpisodiosSchema ({
        id: cuid(),
        nome,
        episodio_url,
        episodio_image,
        episodio_description,
        tema
    })

    return newEpisode.save()
}

export async function findAll() {
  return EpisodiosSchema.find()
}
export async function deleteEP(){
  console.log("delete")
}
export async function update(){
  console.log("update")
}
