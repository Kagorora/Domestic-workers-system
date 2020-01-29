import express from 'express'
import signUp from '../controllers/signUpController'
import addDomesticWorker from '../controllers/addDomesticWorker'
import domesticValidation from '../middlewares/inputValidation'
import authChecker from '../middlewares/checkAuth'
import login from '../controllers/loginController'
import validateLogin from '../middlewares/validateLogin';

const userRoutes = express.Router({ mergeParams: true })

userRoutes.post('/auth/signup', signUp.signUp)
userRoutes.post('/auth/addDomestic', authChecker.auth, domesticValidation.validateDomesticWorkers, addDomesticWorker.addDomesticWorker)
userRoutes.post('/auth/login', validateLogin, login)

export default userRoutes
