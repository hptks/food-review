import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import User from '../models/User'

mongoose.connect('mongodb://localhost/testauth')
let db = mongoose.connection
db.once('open', () => {
  console.log('Connection is now open...')
})

const handleRoutes = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.post('/signup', (request, response) => {
    const { name, email, username, password } = request.body
    User.find({ name, email, username, password }, (error, user) => {
      if (error) {
        throw error
      }

      if (user.length == 0) {
        const user = new User({ name, email, username, password, error: '' })
        user.save()
      } else {
        response.send({ status: 200, name, email, username, password, error: 'User already exists.' })
      }
    })
  })

  app.post('/signin', (request, response) => {
    const { username, password } = request.body
    User.find({ username, password }, (error, user) => {
      if (error) {
        throw error
      }

      if (user.length == 0) {
        response.send({ status: 404, username, password, error: 'User does not exist.' })
      } else {
        response.send({ status: 200, username, password, error: '' })
      }
    })
  })
}

export default handleRoutes
