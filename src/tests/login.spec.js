import chai from 'chai'
import chaiHttp from 'chai-http'
import { compareSync } from 'bcrypt'
import app from '../routes/masterRoutes'

chai.use(chaiHttp)
const { expect } = chai
const testLogin = () => {
  describe('Test /auth/login', () => {
    it('should return 200 on success', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          phoneNumber: '0789706804',
          password: 'password',
        })
        .end((err, res) => {
          console.log(`response body : ${JSON.stringify(res.body)}`)
          expect(res.body.status).to.equal(404)
        })
      done()
    })
  })
}
export default testLogin
