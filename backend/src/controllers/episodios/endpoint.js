import validate from '../../services/validate'
import { index, store, update, deleteEp } from './controller'
import { validateEpisodioBody, validateEpisodioParams } from './validator'

export default [
    {
        method: 'get',
        path: '/episodios',
        action: index,
    },
    {
        method: 'post',
        path: '/episodios',
        action: store,
        handlers: [validate.body(validateEpisodioBody)]
    },
    // {
    //     method: 'put',
    //     path: '/episodios/:id',
    //     action: update,
    //     handlers: [validate.body(validateEpisodioBody), validate.params(validateEpisodioParams)]
    // },
    // {
    //     method: 'delete',
    //     path: '/episodios/id',
    //     action: deleteEp,
    //     handlers: [validate.body(validateEpisodioBody), validate.params(validateEpisodioParams)]
    // }
]