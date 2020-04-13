import userRoutes from './userRoutes'
import client from './clients'
import allWorkers from './viewAllRoute'

export default (app) => {
  app.get('/', (req, res) => res.json('Welcome to  Domestic Workers'))
  app.use('/api/v1', userRoutes)
  app.use('/api/v1', client)
  app.use('/api/v1', allWorkers)
}
