import models from '../db/models'

class GetHousekeepers {
  static async viewAll(req, res) {
    const allHousekeepers = await models.user.findAll({
      where: { type: 'maid' },
    })
    return res.status(200).json({ status: 200, message: 'All Housekeepers', allHousekeepers })
  }
}

export default GetHousekeepers
