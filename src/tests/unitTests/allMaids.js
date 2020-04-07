import chai, { expect, assert } from 'chai'
import chaiHttp from 'chai-http'
import app from '../../index'
import GetHouseMaids from '../../controllers/housekeepersController'


chai.use(chaiHttp)


const maidsUnitTest = () => {
  describe('Single Unit Testing', () => {
    it('Should check the functionality of viewAll method', (done) => {
      chai
        .request(app)
        .get('/api/v1/maids')
        .end(async () => {
        //   console.log('The Maids Test', typeof (GetHouseMaids.viewAll))
          const getAll = await GetHouseMaids.viewAll()
          console.log('The maids', getAll)
        //   assert.equal(getAll)
        })
      done()
    })
  })
}

export default maidsUnitTest
