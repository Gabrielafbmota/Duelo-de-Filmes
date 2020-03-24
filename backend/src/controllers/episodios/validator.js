export function validateEpisodioBody(body) {
    body('nome').isString().required(),
    body('episodio_url').isString().required(),
    body('episodio_image').isString().required(),
    body('episodio_description').isString().required()

  }
  export function validateEpisodioParams(body){
    body('id').required()
    body().strict()
  }
 
  export function validateDeviceParams(body) {
    body('id').required()
    body().strict()
  }