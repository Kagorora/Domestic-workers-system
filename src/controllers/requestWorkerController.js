import models from '../db/models'

class requestWorkerController {
  static async requestWorker(req, res) {
    const { userId } = req.user
    const { workerId } = req.body
    const checkIfIsClient = await models.user.findAll({
      where: { type: 'maid', id: userId },
    })
    if (checkIfIsClient.length > 0) {
      return res.status(403).json({ message: 'only clients can make a request' })
    }
    // search user in the database
    const userIsMaid = await models.user.findAll({
      where: { type: 'maid', id: workerId },
    })
    if (userIsMaid.length <= 0) {
      return res.status(404).json({ message: 'Worker doesnt exist' })
    }

    const userIsAvailable = await models.user.findAll({
      where: { status: 'available', id: workerId },
    })

    if (userIsAvailable.length <= 0) {
      return res.status(404).json({ message: 'Worker not available' })
    }
    models.Client_Requests.create({ client_id: userId, domestic_worker_id: workerId })
    models.user.update({ status: 'not available' }, { where: { id: workerId } })
    return res.status(200).json({ message: 'Request made successful' })
  }
}
export default requestWorkerController
