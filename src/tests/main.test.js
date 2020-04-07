import runrequestWorkerTests from './requestWorker.test'
import testLogin from './login.test'
import addDomesticTests from './addDomesticWorker.test'
import houseMaidsTests from './houseMaids.test'
import userSignUp from './useSignup.test'
import maidsUnitTest from './unitTests/allMaids'

addDomesticTests()
userSignUp()
testLogin()
runrequestWorkerTests()
houseMaidsTests()
maidsUnitTest()
