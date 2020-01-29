import loginSchema from '../helpers/loginSchema'

const validateLogin = (req, res, next) => {
  const { email, password } = req.body

  const { error } = loginSchema.validate({ email, password })

  if (error) {
    // const errorMsgLength = error.message.split(' ').length
    // const lastWord = error.message.split(' ')[errorMsgLength - 1]
    // if (lastWord === 'required') {
    //   res.status(222).json({
    //     status: res.statusCode,
    //     error: 'email or password ',
    //   })
    // }
    res.status(222).json({
      status: res.statusCode,
      error: error.message,
    })
  } else next()
}
export default validateLogin
