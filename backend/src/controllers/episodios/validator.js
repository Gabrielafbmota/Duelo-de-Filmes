export function validateEpisodioBody(body) {
    body('name').isString().required(),
    body('episodio_url').isString().required(),
    body('episodio_image').isString().required(),
    body('episodio_description').isString().required()

  }
 