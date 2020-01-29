import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import models from '../db/models'


export default class signUpController {
  static async signUp(request, response) {
    const {
      firstName, lastName, email, password,
    } = request.body
    const userIsExist = await models.user.findAll({ where: { email } })
    bcrypt.hash(password, 9, async (err, hashedPassword) => {
      if (userIsExist.length > 0) return response.status(409).json({ message: 'User already exist' })
      const newUser = await models.user.create({
        firstName, lastName, email, password: hashedPassword,
      })
      const token = jwt.sign({ userId: newUser.id, email: newUser.email }, process.env.secretkey)
      response.status(201).json({ token, message: 'user successfully created' })
    })
  }
}
