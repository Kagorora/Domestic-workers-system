import runrequestWorkerTests from './requestWorker.test'
import testLogin from './login.test'
import addDomesticTests from './addDomesticWorker.test'
import houseMaidsTests from './houseMaids.test'
import userSignUp from './useSignup.test'

addDomesticTests()
userSignUp()
testLogin()
runrequestWorkerTests()
houseMaidsTests()
