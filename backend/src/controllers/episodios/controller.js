import * as EndpointRepository from '../../repositories/episodios'

export async function index(req, res, next) {
    try {
        const ap = await EndpointRepository.findAll()
        res.status(200).send(ap)
    } catch (error) {
        res.status(500).send(error.message)
    }

    return next()
}

export async function store(req, res, next) {
    try {
        const { nome, episodio_url, episodio_image, episodio_description, tema } = req.body
   
        const response = await EndpointRepository.save({ nome, episodio_url, episodio_image, episodio_description, tema })
        if (response) {
            res.status(201).send(response)
        }
     



    } catch (error) {
        res.status(500).send(error.message)
    }

    return next()
}

// export async function updateEp(req, res, next) {
//     try {

//     } catch (error) {
//         res.status(500).send(error.message)
//     }

//     return next()
// }
export async function deleteEpisodio(req, res, next) {
    try {
        const episodioId = req.params.id
        const response = await EndpointRepository.deleteEpisodio(episodioId)
        if(response){
            res.status(204).send(response)
            console.log(response)
        }else{
            res.status(500).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

    return next()
}
