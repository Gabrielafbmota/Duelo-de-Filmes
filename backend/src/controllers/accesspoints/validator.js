export function validateAPBody(body) {
    body('name').isString().required(),
    body('coordenadaX').isNumber().required(),
    body('coordenadaY').isNumber().required(),
    body('coordenadaZ').isNumber().required()

  }
