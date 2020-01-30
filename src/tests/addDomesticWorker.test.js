import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../index'

chai.use(chaiHttp)
chai.should()

describe('add domestic Emp', () => {
  it('should be able to register a Domestic worker', (done) => {
    const newDome = {
      firstName: 'maxime',
      lastName: 'Kagorora',
      email: 'kagorora1@gmail.com',
      passord: 'Niyonkuru@1',
      phoneNumber: '25078229971',
      nid: 4,
      Status: 'available',
      type: 'cleaner',
      description: 'ifjhihfalkailhba',
    }
    chai.request(server)
      .post('/api/v1/auth/addDomestic')
      .send(newDome)
      .end((err, res) => {
        res.body.status.should.be.equal(201)
        res.body.should.be.an('object')
      })
    done()
  })

  it('should not be able to register for missing information', (done) => {
    const incomplete = {
      lastName: 'Kagorora',
      email: 'kagorora1@gmail.com',
      passord: 'Niyonkuru@1',
      phoneNumber: '25078229971',
      nid: 4,
      Status: 'available',
      type: 'cleaner',
      description: 'ifjhihfalkailhba',
    }
    chai.request(server)
      .post('/api/v1/auth/addDomestic')
      .send(incomplete)
      .end((err, res) => {
        res.body.status.should.be.equal(400)
        res.body.should.be.an('object')
      })
    done()
  })
})
