import { index, cadastro } from './controller'
import { validateAPBody } from './validator'

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
        // handlers: [validate.body(validateAPBody)]
    }
]