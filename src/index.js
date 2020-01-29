import express from 'express'
import { json, urlencoded } from 'body-parser'
import { config } from 'dotenv'
import masterRoute from './routes/masterRoutes'

config()
const app = express()

app.use(urlencoded({ extended: false }))
app.use(json())

const port = process.env.PORT || 4000
app.listen(port)
masterRoute(app)
console.log(`App listening on port ${port}...`)

export default app
