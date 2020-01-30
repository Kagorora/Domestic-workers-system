/* eslint-disable padded-blocks */
/* eslint-disable arrow-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index'

chai.use(chaiHttp)
chai.should()

const houseMaidsTests = () => {
  describe('All housemaids testing...', () =>{
  
    it('Should bring all users whose type is "maid"', (done) => {
      chai
        .request(app)
        .get('/maids')
        .end((err, res) => {
          expect(res.body).to.be.an('object')
        })
      done()
    })
  })
}

export default houseMaidsTests
