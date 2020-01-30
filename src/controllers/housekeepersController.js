import models from '../db/models'

class GetHouseMaids {
  static async viewAll(req, res) {
<<<<<<< HEAD
    const allHousekeepers = await models.user.findAll({
      where: { type: 'maid' },
    })
    return res.status(200).json({ status: 200, message: 'All Housekeepers', allHousekeepers })
=======
    try {
      const allMaids = await models.user.findAll({
        where: { type: 'maid' },
      })
      return res.status(200).json({ status: 200, message: 'All Maids', allMaids })
    } catch (err) {
      return res.status(500).json({ Error: err })
    }
>>>>>>> increasing tests
  }
}

export default GetHouseMaids
