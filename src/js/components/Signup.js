import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { signup } from '../actions/authActions'

@connect((store) => {
  return {
    users: store.users
  }
})

export default class Signup extends React.Component {
  constructor() {
    super()
    this.state={
      name: '',
      email: '',
      username: '',
      password: ''
    }
  }

  getName(e) {
    this.setState({
      name: e.target.value
    })
  }

  getEmail(e) {
    this.setState({
      email: e.target.value
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

  handleRequestSignup() {
    const { name, email, username, password } = this.state
    this.props.dispatch(signup(name, email, username, password))
    this.setState({
      name: '',
      email: '',
      username: '',
      password: ''
    })
    browserHistory.push('/')
  }

  render() {
    const self = this
    const { name, email, username, password } = self.state

    return (
      <div class="container">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h2>Sign up</h2>
          <br />
          <div class="form-group">
            <input class="form-control" type="text" onChange={this.getName.bind(this)} value={name} placeholder="Name" />
          </div>
          <div class="form-group">
            <input class="form-control" type="text" onChange={this.getEmail.bind(this)} value={email} placeholder="Email" />
          </div>
          <div class="form-group">
            <input class="form-control" type="text" onChange={this.getUsername.bind(this)} value={username} placeholder="Username" />
          </div>
          <div class="form-group">
            <input class="form-control" type="password" onChange={this.getPassword.bind(this)} value={password} placeholder="Password" />
          </div>
          <div class="col-md-12 btn btn-primary" onClick={self.handleRequestSignup.bind(self)}>Sign up</div>
        </div>
        <div class="col-md-4"></div>
      </div>
    )
  }
}
