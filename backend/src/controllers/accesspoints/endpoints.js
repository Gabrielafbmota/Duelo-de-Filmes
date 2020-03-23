import { index, cadastro } from './controller'
// import * as validate from './validator'

export default [
    {
        methot: 'get',
        path: '/accesspoints',
        action: index,
    },
    {
        methot: 'post',
        path: '/accesspoints',
        action: cadastro,
        // handlers: [validate.body(validateAPBody)]
    }
]