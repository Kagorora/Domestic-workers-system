import express from 'express'
import signUp from '../controllers/signUpController'

const userRoutes = express.Router({ mergeParams: true })

userRoutes.post('/auth/signup', signUp.signUp)



export default userRoutes
