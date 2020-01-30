import models from '../db/models'

export default class addDomWorkController {
  static async addDomesticWorker(req, res) {
    const {
      firstName, lastName, phoneNumber, nid, status, type, description,
    } = req.body
    const userExist = await models.user.findAll({ where: { nid } })
    if (userExist.length > 0) {
      return res.status(409).json({
        status: 409,
        message: 'User already exists',
      })
    }
    const newDomesticEmployee = await models.user.create({
      firstName, lastName, phoneNumber, nid, status, type, description,
    })

    return res.status(201).json({
      status: 201,
      message: 'Domestic employee successfully registered',
      data: newDomesticEmployee,
    })
  }
}
