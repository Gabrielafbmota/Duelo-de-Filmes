import * as APShcema from '../../repositories/episodios'

export async function index (req, res, next){
    try{
        const ap = await APShcema.findAll()
        res.status(200).send(ap)
    }catch(error){
        res.status(500).send(error.message)
    }        
    
    return next()
}

 export async function cadastro(req, res, next){
    const { nome, coordenadaX, coordenadaY, coordenadaZ } = req.body
    const response = await APShcema.store({ nome, coordenadaX, coordenadaY, coordenadaZ })
    if (response) {
        res.status(201).send(response)
      }
    return next()
}