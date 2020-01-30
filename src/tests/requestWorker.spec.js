/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

import dotenv from 'dotenv'
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import jwt from 'jsonwebtoken'
import server from '../index'
import mockData from './mockData'

dotenv.config()
chai.use(chaiHttp)
chai.should()

const RequestWorkerTests = () => {
  describe('Client requestin a Domestic Worker', () => {
    it('It should return 404 when there is no maid with the provided id ', (done) => {
      const Signed = mockData.token
      const clientRequest = mockData.request1
      const Token = jwt.sign(Signed, process.env.secretOrPrivateKey, { expiresIn: '24h' })
      chai
        .request(server)
        .post('/api/v1/clientRequest')
        .set('token', Token)
        .send(clientRequest)
        .end((err, res) => {
          expect(res.body).to.be.an('object')
          expect(res.body.message).to.deep.equal('invalid token.')
          done()
        })
    })
  })
}
module.exports = RequestWorkerTests
