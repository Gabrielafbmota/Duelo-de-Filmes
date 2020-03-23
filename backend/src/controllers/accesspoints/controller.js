import * as APRepositories from '../../repositories/accesspoints'

export async function index (req, res, next){
    try{
        const ap = await APRepositories.findAll()
        res.status(200).send(ap)
    }catch(error){
        res.status(500).send(error.message)
    }        
    
    return next()
}

 export async function store(req, res, next){
    try{
        const { nome, coordenadaX, coordenadaY, coordenadaZ } = req.body
        const response = await APRepositories.store({ nome, coordenadaX, coordenadaY, coordenadaZ })
        res.status(201).send(response)
    }catch(error){
        res.status(500).send(error.message)
    }
    return next()
}