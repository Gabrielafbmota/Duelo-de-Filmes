import { index, cadastro } from './controller'
// import { validateAPBody } from './validator'

export default [
    {
        methot: 'get',
        path: '/episodioss',
        action: index,
    },
    {
        methot: 'post',
        path: '/episodioss',
        action: cadastro,
        // handlers: [validate.body(validateAPBody)]
    }
]