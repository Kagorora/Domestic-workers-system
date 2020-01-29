/* eslint-disable no-undef */
import { expect, use, request } from 'chai'
import chaiHttp from 'chai-http'
import jwt from 'jsonwebtoken'
import server from '../index'
import mockData from './mockData'

chai.use(chaiHttp)
chai.should()

const RequestWorkerTests = () => {
  describe('Client requestin a Domestic Worker', () => {
    it('It should return 404 when there is no maid with the provided id ', (done) => {
      const Signed = mockData.token
      const clientRequest = mockData.request1
      const Token = jwt.sign(Signed, process.env.secretkey, { expiresIn: '24h' })
        .request(server)
        .post('/api/v1/clientRequest')
        .set('token', Token)
        .send(clientRequest)
        .end((err, res) => {
          expect(res.status).to.equal(404)
          done()
        })
    })
  })
}
module.exports = RequestWorkerTests
