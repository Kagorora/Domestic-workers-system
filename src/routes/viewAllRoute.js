import express from 'express'
import GetHousekeepers from '../controllers/housekeepersController'

const router = express.Router()


router.get('/housekeepers', GetHousekeepers.viewAll)

export default router
