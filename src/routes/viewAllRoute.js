import express from 'express'
import GetHouseMaids from '../controllers/housekeepersController'

const router = express.Router()


router.get('/maids', GetHouseMaids.viewAll)

export default router
