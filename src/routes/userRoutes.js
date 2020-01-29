import express from 'express'
import signUp from '../controllers/signUpController'
import addDomesticWorker from '../controllers/addDomesticWorker'
import domesticValidation from '../middlewares/inputValidation'

const userRoutes = express.Router({ mergeParams: true })

userRoutes.post('/auth/signup', signUp.signUp)
userRoutes.post('/auth/addDomestic', domesticValidation.validateDomesticWorkers, addDomesticWorker.addDomesticWorker)

export default userRoutes
