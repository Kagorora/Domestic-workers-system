
import clientRequest from '../models/clientRequests';
import users from '../models/users';
import response from '../helpers/response';

class requestWorkerController {
  static async requestWorker(req, res) {
    // search user in the database
    users
      .findAll({
        where: {
          status: 'available',
          id: req.body.workerId,
        },
      })

      .then((users) => {
        if (users.length === 0) {
          return response.response(res, 404, 'error', 'Worker not found  ', true);
        }
        const data = {
          Client_ID: 10,
        };
        const { Client_ID } = data;

        const { workerId } = req.body;
        console.log(req.body);

        // make a request

        clientRequest
          .create({ Client_ID, DomesticWorker_ID: workerId })
          .then(
            response.response(
              res,
              200,
              'Request made successful',
              'Request made successful',
              false,
            ),

          )
          .catch((err) => console.log(`erro:${err}`));
      })
      .catch((err) => console.log(err));
  }
}
export default requestWorkerController;
