import jwt from 'jsonwebtoken'
import env from 'dotenv'

env.config()

const generateToken = (payload) => jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: '4h' })

export default generateToken
