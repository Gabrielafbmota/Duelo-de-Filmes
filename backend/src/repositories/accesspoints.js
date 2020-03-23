import APSchema from '../models/AccessPoints'
import cuid from 'cuid'

export async function store({ nome, coordenadaX, coordenadaY, coordenadaZ }){
    const newAP = new APSchema ({
        apId: cuid(),
        nome, 
        coordenadaX, 
        coordenadaY, 
        coordenadaZ
    })

    return newAP.store()
}

export async function findAll() {
  return APSchema.find()
}
