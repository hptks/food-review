import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import User from '../models/User'

mongoose.connect('mongodb://localhost/authentication')
let db = mongoose.connection
db.once('open', () => {
  console.log('Connection is now open...')
})

const handleRoutes = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.post('/signup', (request, response) => {
    const { name, email, username, password } = request.body
  })

  app.post('/signin', (request, response) => {
    const { username, password } = request.body
    console.log(User.find({}, (error, users) => {
      if (error) {
        response.json(status: 404)
      }

      console.log(users)
    }))
  })
}

export default handleRoutes
