import jwt from 'jsonwebtoken'


const auth = (req, res, next) => {
  const token = req.header('token')
  if (!token) {
    return res.status(401).json({ message: 'Access denied. no token provided.' })
  }
  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY)
    req.user = decoded

    next()
  } catch (ex) {
    return res.status(401).json({ message: 'invalid token.' })
  }
  return (token)
}
export default {
  auth,
}
