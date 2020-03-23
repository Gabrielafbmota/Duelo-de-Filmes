import { index, store } from './controller'
// import * as validate from './validator'

export default [
    {
        method: 'get',
        path: '/accesspoints',
        action: index,
    },
    {
        method: 'post',
        path: '/accesspoints',
        action: store,
        // handlers: [validate.body(validateAPBody)]
    }
]