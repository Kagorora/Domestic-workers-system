import models from '../db/models'

class GetHouseMaids {
  static async viewAll(req, res) {
    try {
      const allMaids = await models.user.findAll({
        where: { type: 'maid' },
      })
      return res.status(200).json({ status: 200, message: 'All Maids', allMaids })
    } catch (err) {
      return res.status(500).json({ Error: err })
    }
  }
}

export default GetHouseMaids
