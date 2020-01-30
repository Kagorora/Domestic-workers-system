import runrequestWorkerTests from './requestWorker.test'
import testLogin from './login.spec'
import addDomesticTests from './addDomesticWorker.test'
import houseMaidsTests from './houseMaids.spec'

addDomesticTests()
testLogin()
runrequestWorkerTests()
houseMaidsTests()
