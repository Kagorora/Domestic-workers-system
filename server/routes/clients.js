import express from 'express';
import requestWorkerController from '../controllers/requestWorkerController'

const router = express.Router();

const {
    requestWorker
  } = requestWorkerController


  router.post('/clients', requestWorker);



export default router;