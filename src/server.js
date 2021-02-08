import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import route from './routes' 

const app = express()

mongoose.connection.on('error', err => {
  console.error('MongoDB error', err)
})

app.use(bodyParser.json());
app.use(cors());
app.use(route)
app.use(express.json())

mongoose.connect('mongodb://mongodb:27017/express-docker-starter', {
  useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
  console.info('Mongoose connection has been connected.')
})

app.listen(8001, () => {
  console.log('Application is running on port 8001')
})


