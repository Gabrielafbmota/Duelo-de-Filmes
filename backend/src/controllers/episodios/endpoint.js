import { index, cadastro } from './controller'
import { validateAPBody } from './validator'

export default [
    {
        methot: 'get',
        path: '/episodios',
        action: index,
    },
    {
        methot: 'post',
        path: '/episodios',
        action: cadastro,
        // handlers: [validate.body(validateAPBody)]
    }
]