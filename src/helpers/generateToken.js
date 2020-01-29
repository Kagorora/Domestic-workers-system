import jwt from 'jsonwebtoken'
import env from 'dotenv'

env.config()

const generateToken = (payload) => jwt.sign(payload, process.env.SECRET_OR_PRIVATE_KEY, { expiresIn: '4h' })

export default generateToken
