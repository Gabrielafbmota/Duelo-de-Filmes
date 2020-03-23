import validate from '../../services/validate'
import { index, cadastro, update, deleteEp } from './controller'
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
    },
    {
        method: 'put',
        path: '/episodios/:id',
        action: update,
        handlers: [validate.body(validateEpisodioBody)]
    },
    {
        method: 'delete',
        path: '/episodios/id',
        action: deleteEp,
        handlers: [validate.body(validateEpisodioBody)]
    }
]