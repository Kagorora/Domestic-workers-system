import express from 'express'
import requestWorkerController from '../controllers/requestWorkerController'
import authChecker from '../middlewares/checkAuth'


const router = express.Router()

const {
  requestWorker,
} = requestWorkerController


router.post('/clientRequest', [authChecker.auth, requestWorker])


export default router
