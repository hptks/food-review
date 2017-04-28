import bodyParser from 'body-parser'

import User from '../models/User'

const handleRoutes = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.post('/', (request, response) => {
    const { name, email, username, password } = request.body
  })

  app.post('/login', (request, response) => {
    const { username, password } = request.body
    User.find({ username, password }, (error, user) => {
      if (error) {
        response.json({ status: 404 })
      } else {
        response.json({ status: 200, username })
      }
    })
  })
}

export default handleRoutes
