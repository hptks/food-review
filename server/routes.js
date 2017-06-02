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
        const user = new User({ name, email, username, password })
        user.save()
      } else {
        response.json({ status: 404 })
      }
    })

    response.json({ status: 200, name, email, username, password })
  })

  app.post('/signin', (request, response) => {
    const { username, password } = request.body
  })
}

export default handleRoutes
