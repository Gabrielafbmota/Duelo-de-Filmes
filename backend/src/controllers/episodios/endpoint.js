import validate from '../../services/validate'
import { index, cadastro } from './controller'
import { validateEpisodioBody } from './validator'

export default [
    {
        method: 'get',
        path: '/episodios',
        action: index,
    },
    {
        method: 'post',
        path: '/episodios',
        action: cadastro,
        handlers: [validate.body(validateEpisodioBody)]
    }
]