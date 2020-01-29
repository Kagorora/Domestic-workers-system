import loginSchema from '../helpers/loginSchema'

const validateLogin = (req, res, next) => {
  const { email, password } = req.body

  const { error } = loginSchema.validate({ email, password })

  if (error) {
    res.status(222).json({
      status: res.statusCode,
      error: error.message,
    })
  } else next()
}
export default validateLogin
