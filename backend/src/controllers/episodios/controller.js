import * as EndpointRepository from '../../repositories/episodios'

export async function index (req, res, next){
    try{
        const ap = await EndpointRepository.findAll()
        res.status(200).send(ap)
    }catch(error){
        res.status(500).send(error.message)
    }        
    
    return next()
}

 export async function cadastro(req, res, next){
    const { nome } = req.body
    const response = await EndpointRepository.store({ nome })
    if (response) {
        res.status(201).send(response)
      }
    return next()
}