import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../index'

chai.use(chaiHttp)
const { expect } = chai
const testLogin = () => {
  describe('Test /auth/login', () => {
    it('should return 222 if invalid email', (done) => {
      chai
        .request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'william.com',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.body.status).to.equal(222)
          expect(res.body).to.have.property('error')
        })
      done()
    })
    it('should return 401 if invalid password or email passed', (done) => {
      chai
        .request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'nobody@gmail.com',
          password: 'password',
        })
        .end((err, res) => {
          expect(res.body.status).to.equal(401)
          expect(res.body).to.have.property('error')
          expect(res.body.error).to.be('Invalid email or password!')
        })
      done()
    })
    it('should return 200 if valid password and email passed', (done) => {
      chai
        .request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'weod@gmail.com',
          password: 'sad123',
        })
        .end((err, res) => {
          expect(res.body.status).to.equal(200)
        })
      done()
    })
  })
}
export default testLogin
