import Validator from 'better-validator'

const { WrapperFormatter } = Validator.format.response
const { FailureFormatter } = Validator.format.failure

const validate = Validator.expressMiddleware({
  responseFormatter: new WrapperFormatter(),
  FailureFormatter: new FailureFormatter(),
})

export const bodyValidator = validate.body
export const paramsValidator = validate.params
export const queryValidator = validate.query

export default validate
