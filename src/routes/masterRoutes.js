import userRoutes from './userRoutes'
import client from './clients'

export default (app) => {
  app.use('/api/v1', userRoutes)
  app.use('/api/v1', client)
}
