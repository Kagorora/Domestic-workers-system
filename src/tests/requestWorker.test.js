import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index'

chai.use(chaiHttp)
chai.should()

const RequestWorkerTests = () => {
  describe('Client requesting for a domestic Worker', () => {
    it('It should return 401 for when no token provided', (done) => {
      chai
        .request(app)
        .post('/api/v1/clientRequest')
        .end((err, res) => {
          expect(res.status).to.equal(401)
          done()
        })
    })
    it('It should return 401 for invalid token', (done) => {
      const Token = 'token'
      chai
        .request(app)
        .post('/api/v1/clientRequest')
        .set('token', Token)
        .end((err, res) => {
          expect(res.status).to.equal(401)
          done()
        })
    })
  })
}
module.exports = RequestWorkerTests
