import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import server from '../index'
import mockData from './mockData'

chai.use(chaiHttp)
chai.should()

const addDomesticTests = () => {
  describe('add domestic Emp', () => {
    it('should be able to register a Domestic worker', (done) => {
      const newDome = mockData.user1
      const Token = mockData.token.token
      chai.request(server)
        .post('/api/v1/auth/addDomestic')
        .set('token', Token)
        .send(newDome)
        .end((err, res) => {
          expect(res.status).to.equal(201)
          done()
        })
    })
    it('should be able to register a Domestic worker', (done) => {
      const newDome = ''
      const Token = mockData.token.token
      chai.request(server)
        .post('/api/v1/auth/addDomestic')
        .set('token', Token)
        .send(newDome)
        .end((err, res) => {
          expect(res.status).to.equal(422)
          done()
        })
    })
  })
}

module.exports = addDomesticTests
