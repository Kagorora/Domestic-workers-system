import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import environment from 'dotenv'
import models from '../db/models'

environment.config()

export default class signUpController {
  static async signUp (request, response) {
    const {
      firstName, lastName, email, password,
    } = request.body
    const userIsExist = await models.user.findAll({ where: { email } })
    if (userIsExist.length > 0) return response.status(409).json({ message: 'User already exist' })
    bcrypt.hash(password, 9, async (err, hashedPassword) => {
      const newUser = await models.user.create({
        firstName, lastName, email, password: hashedPassword, type: 'client',
      })
      const token = jwt.sign({ userId: newUser.id, email: newUser.email }, process.env.secretkey)
      response.status(201).json({ token, message: 'user successfully created' })
    })
  }
}
