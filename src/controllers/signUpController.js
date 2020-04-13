import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import environment from 'dotenv'
import models from '../db/models'

environment.config()

export default class signUpController {
  static async signUp(req, res) {
    try {
      const {
        firstName, lastName, email, password,
      } = req.body
      const userIsExist = await models.user.findAll({ where: { email } })
      if (userIsExist.length > 0) return res.status(409).json({ message: 'User already exist' })
      bcrypt.hash(password, 9, async (err, hashedPassword) => {
        const newUser = await models.user.create({
          firstName, lastName, email, password: hashedPassword, type: 'client',
        })
        const token = jwt.sign({ userId: newUser.id, email: newUser.email }, process.env.PRIVATE_KEY)
        res.status(201).json({ token, message: 'user successfully created' })
      })
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      })
    }
  }
}
