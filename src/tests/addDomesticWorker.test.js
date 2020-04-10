import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import server from '../index'
import mockData from './mockData'

dotenv.config()
chai.use(chaiHttp)
chai.should()

const addDomesticTests = () => {
  describe('add domestic Emp', () => {
    it('should be able to register a Domestic worker', (done) => {
      const Signed = mockData.admin
      const newDome = mockData.user1
      const Token = jwt.sign(Signed, process.env.PRIVATE_KEY, { expiresIn: '24h' })
      chai.request(server)
        .post('/api/v1/auth/addDomestic')
        .set('token', Token)
        .send(newDome)
        .end((err, res) => {
          expect(res.status).to.equal(201)
          done()
        })
    })
    it('should not be able to register a Domestic worker', (done) => {
      const newDome2 = ''
      const Signed = mockData.admin
      const Token = jwt.sign(Signed, process.env.PRIVATE_KEY, { expiresIn: '24h' })

      chai.request(server)
        .post('/api/v1/auth/addDomestic')
        .set('token', Token)
        .send(newDome2)
        .end((err, res) => {
          expect(res.status).to.equal(422)
          done()
        })
    })
  })
}

module.exports = addDomesticTests
