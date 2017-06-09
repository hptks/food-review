import React from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'

import { signin } from '../actions/authActions'

@connect((store) => {
  return {
    users: store.users
  }
})

export default class Signin extends React.Component {
  constructor() {
    super()
    this.state=({
      username: '',
      password: ''
    })
  }

  getUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  getPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  requestLogin() {
    const { username, password } = this.state
    this.props.dispatch(signin(username, password))
    this.setState({
      username: '',
      password: ''
    })

    setTimeout(() => {
      if (this.props.users.isLoggedIn) {
        browserHistory.push('/profile')
      }
    }, 1000)
  }

  render() {
    const { username, password } = this.state

    return (
      <div class="container">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h2>Sign in</h2>
          <br />
          <div class="form-group">
            <input class="form-control" type="text" value={username} placeholder="Username" onChange={this.getUsername.bind(this)} />
          </div>
          <br />
          <div class="form-group">
            <input class="form-control" type="password" value={password} placeholder="Password" onChange={this.getPassword.bind(this)} />
          </div>
          <div class="col-md-12 btn btn-primary" onClick={this.requestLogin.bind(this)}>Sign in</div>
          <br />
          <div class="col-md-12">
            Do not have an account, yet? <Link to='/signup'>Sign up</Link>.
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    )
  }
}
