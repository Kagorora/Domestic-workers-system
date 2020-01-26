import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import clients from './routes/clients';
import db from './config/database';
import response from'./helpers/response'


dotenv.config();
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.authenticate()
.then(() =>console.log('database connected....'))
.catch(err =>console.log('error:' + err))

app.use('/api/v2', clients);
app.use('*', (req, res) => {
  response.response(res, 404, 'error', 'resource not found', true);
});

const { PORT } = process.env;

app.listen(PORT);
console.log(`app listen on port ${PORT}`)

export default app;

